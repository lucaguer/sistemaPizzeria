let dataTable;
let tablaIniciada = false;

let proveedores = JSON.parse(localStorage.getItem("lSProveedores"));
let ventas = JSON.parse(localStorage.getItem("lSVentas"));
let usuLogeado = JSON.parse(sessionStorage.getItem('usuarioLogeado'));
let usuarios = JSON.parse(localStorage.getItem('lSUsuarios'));

window.addEventListener("load", async () =>{
    const modal = new bootstrap.Modal(document.getElementById('modalIniciarSesion'));
    modal.show();
    if (!sessionStorage.getItem('usuarioLogeado')) {
        Swal.fire({
            position: "center",
            icon: "info",
            title: "Inicio de sesion requerido",
            showConfirmButton: false,
            timer: 1500
        }).then(() => {// Redirigir al usuario después de que el usuario haya cerrado el mensaje de éxito
            window.location.href = 'index.html';            
        });
        
    }else{
        await tablaCargada();
        cargarDatosUsuario();
        modal.hide();
    }
})

function cargarDatosUsuario(){
    document.getElementById('usuarioLogeadoNavbar').textContent = usuLogeado.usuario;
    document.getElementById('nombreUsuario').textContent = usuLogeado.usuario;
    document.getElementById('nombreApellidoPerfil').textContent = usuLogeado.nombre + ' ' + usuLogeado.apellido;
    document.getElementById('correoPerfil').textContent = usuLogeado.correo;
    document.getElementById('telefonoPerfil').textContent = usuLogeado.telefono;
};
function editarUsuario(){
    document.getElementById('nombreEditUsuario').value = usuLogeado.nombre;
    document.getElementById('apellidoEditUsuario').value = usuLogeado.apellido;
    document.getElementById('correoEditUsuario').value = usuLogeado.correo;
    document.getElementById('telefonoEditUsuario').value = usuLogeado.telefono;
    document.getElementById('usuarioEditUsuario').value = usuLogeado.usuario;
    $('#modalEditarUsuario').modal('show');
}
const guardarEditUsuario = async(event) => {
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
        }, false)
    })
    event.preventDefault();
    if(document.getElementById('formEditarUsuario').checkValidity()){
        let pos = buscarPosUsuario(usuLogeado.codigo);
        let contraseñaAnterior = document.getElementById('contAnterior').value;
        let nuevaC = document.getElementById('nuevaCont').value;
        let repetNuevaC = document.getElementById('repetirNuevaCont').value;
        if(contraseñaAnterior !== ''){
            if(contraseñaAnterior === usuLogeado.contraseña){
                if(nuevaC !== '' && nuevaC === repetNuevaC){
                    usuarios[pos].nombre = (document.getElementById('nombreEditUsuario').value).toUpperCase();
                    usuarios[pos].apellido = (document.getElementById('apellidoEditUsuario').value).toUpperCase();
                    usuarios[pos].correo = document.getElementById('correoEditUsuario').value;
                    usuarios[pos].usuario = (document.getElementById('usuarioEditUsuario').value).toLowerCase();
                    usuarios[pos].contraseña = nuevaC;
                    usuarios[pos].telefono = document.getElementById('telefonoEditUsuario').value;
                    Swal.fire({
                        icon: 'success',
                        title: 'Exito',
                        text: 'Usuario Guardado',
                        timer: 1500
                    })
    
                    usuLogeado = usuarios[pos];
                    sessionStorage.setItem('usuarioLogeado', JSON.stringify(usuLogeado));
                    localStorage.setItem('lSUsuarios', JSON.stringify(usuarios));
                    $('#modalEditarUsuario').modal('hide');
                }else{
                    Swal.fire({
                        title: 'Las contraseñas no coinciden',
                        icon: 'warning',
                        timer: 1500
                    })
                }
            }else{
                Swal.fire({
                    title: 'Contraseña Incorrecta',
                    text: 'Ingrese su contraseña anterior',
                    icon: 'error',
                    showConfirmButton: true,
                    timer: 2000
                })
            }
        }else{        
            usuarios[pos].nombre = (document.getElementById('nombreEditUsuario').value).toUpperCase();
            usuarios[pos].apellido = (document.getElementById('apellidoEditUsuario').value).toUpperCase();
            usuarios[pos].correo = document.getElementById('correoEditUsuario').value;
            usuarios[pos].usuario = (document.getElementById('usuarioEditUsuario').value.toLowerCase());
            usuarios[pos].telefono = document.getElementById('telefonoEditUsuario').value;
            console.log(usuarios);
    
            usuLogeado = usuarios[pos];
            sessionStorage.setItem('usuarioLogeado', JSON.stringify(usuLogeado));
    
            localStorage.setItem('lSUsuarios', JSON.stringify(usuarios));
            await Swal.fire({
                title: 'Usuario Guardado',
                icon: 'success',
                timer: 1500
            })
            $('#modalEditarUsuario').modal('hide');
        }
        cargarDatosUsuario();
    }

}
function buscarPosUsuario(cod){
    pos = -1;
    usuarios.forEach((usuarios, index) => {
        if(usuarios.codigo == cod){
            pos = index;
        }
    })
    return pos;
}

const opcionesDataTableProveedores = {
    pageLength: 5,
    destroy: true,
    dom: 'Bfrltip',
    buttons: [
        {
            extend: 'excelHtml5',
            text: '<i class="bi bi-file-earmark-excel-fill"></i>',
            titleAttr: 'Exportar a Excel',
            className: 'btn btn-success'
        },
        {
            extend: 'pdfHtml5',
            text: '<i class="bi bi-file-earmark-pdf-fill"></i>',
            titleAttr: 'Exportar a PDF',
            title: 'Reporte de Proveedores',
            className: 'btn btn-danger',
            messageTop: '',
            messageBottom: '',
            customize: function (doc) {
                console.log(doc);  // Inspecciona la estructura del documento
// Encontrar el índice de la tabla dinámicamente
    let tableIndex = -1;
    for (let i = 0; i < doc.content.length; i++) {
        if (doc.content[i].table) {
            tableIndex = i;
            break;
        }
    }
    if (tableIndex === -1) {
        console.error('No se encontró la tabla en doc.content');
        return;
    }

    // Cambiar tamaño de fuente y color de la tabla
    var rowCount = doc.content[tableIndex].table.body.length;
    for (var i = 0; i < rowCount; i++) {
        doc.content[tableIndex].table.body[i].forEach(function (cell) {
            let newStyle = cell.style ? { ...cell.style } : {};
            if (i === 0) {
                newStyle.fontSize = 6; // Tamaño más legible para el encabezado (2 era muy pequeño)
                newStyle.color = '#fffff'; // Color blanco para el texto del encabezado
                newStyle.fillColor = '#1F497D'
            } else {
                newStyle.fontSize = 6; // Tamaño para los datos
            }
            cell.style = newStyle;
        });
    }

                var lastColumnIndex = doc.content[1].table.body[0].length - 1;
                doc.content[1].table.body.forEach(function(row) {
                    row.splice(lastColumnIndex, 1);
                });

                // Asegúrate de que la tabla de datos esté en el índice correcto
                if (doc.content[1] && doc.content[1].table) {
                    doc.content[1].table.widths = [
                        '5%', '15%', '10%', '10%', '10%', 
                        '25%', '10%', '10%', '10%', '10%', '10%'
                    ];
                    var objLayout = {};
                    objLayout['hLineWidth'] = function(i) { return .5; };
                    objLayout['vLineWidth'] = function(i) { return .5; };
                    objLayout['hLineColor'] = function(i) { return '#aaa'; };
                    objLayout['vLineColor'] = function(i) { return '#aaa'; };
                    objLayout['paddingLeft'] = function(i) { return 4; };
                    objLayout['paddingRight'] = function(i) { return 4; };
                    doc.content[1].layout = objLayout;
                }
                doc.footer = function(currentPage, pageCount) {
                    return {
                        text: currentPage.toString() + ' de ' + pageCount,
                        alignment: 'center',
                        style: 'footerStyle'
                    };
                };
                doc.styles.footerStyle = {
                    fontSize: 10,
                    margin: [0, 0, 0, 10]
                };
                // Agregar logo en la cabecera
                doc.content.splice(0, 0, {
                    margin: [0, 0, 0, 12],
                    alignment: 'center',
                    image: 'data:image/jpeg;base64,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',  // Reemplaza con tu imagen en base64
                    width: 200,
                    height: 50
                });

                // Agregar fecha y hora actuales
                const now = new Date();
                const dateOptions = {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                    timeZoneName: 'short'
                };
                const fechaHora = now.toLocaleString('es-ES', dateOptions).replace(',', '');
                const [fecha, hora] = fechaHora.split(' ');

                doc.content.splice(1, 0, [
                    {
                        text: fecha,
                        alignment: 'left',
                        margin: [20, 10, 0, 0],
                        style: 'headerStyle'
                    },
                    {
                        text: hora,
                        alignment: 'left',
                        margin: [20, 0, 0, 0],
                        style: 'headerStyle'
                    }
                ]);

                // Pie de página con número de página
                doc.footer = function(currentPage, pageCount) {
                    return {
                        margin: [20, 10, 20, 10],
                        text: `Página ${currentPage} de ${pageCount}`,
                        alignment: 'center',
                        style: 'footerStyle'
                    };
                };

                doc.styles.headerStyle = {
                    fontSize: 10,
                    color: '#000000'
                };

                doc.styles.footerStyle = {
                    fontSize: 10,
                    color: '#000000'
                };
            }
        },
        {
            extend: 'print',
            text: '<i class="bi bi-printer-fill"></i>',
            titleAttr: 'Imprimir',
            className: 'btn btn-info'
        },
    ],
    language:{
        decimal: "",
        emptyTable: "No hay registros",
        info: "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
        infoEmpty: "Mostrando 0 to 0 of 0 Entradas",
        infoFiltered: "(Filtrado de _MAX_ total entradas)",
        infoPostFix: "",
        thousands: ",",
        lengthMenu: "Mostrar _MENU_ Entradas",
        loadingRecords: "Cargando...",
        processing: "Procesando...",
        search: "Buscar:",
        zeroRecords: "Sin resultados encontrados",
        paginate: {
            first: "Primero",
            last: "Ultimo",
            next: "Siguiente",
            previous: "Anterior",
        },
    }
};

const tablaCargada = async()=>{
    if(tablaIniciada){
        dataTable.destroy();
    }
    await mostrarDatos();

    dataTable = $("#tablaProveedores").DataTable(opcionesDataTableProveedores);

    tablaIniciada = true;
};

const mostrarDatos = async =>{
    try{        
        let contensBody = ``;
        proveedores.forEach((proveedores, index) => {
            let id = index + 1;
            contensBody+= `
            <tr id="fila_` + id + `">
                <td class="centered border bg-primary-200 text-white" id="codigoProveedor_` + id + `">${proveedores.codProveedor}</td>
                <td class="centered border bg-primary-200 text-white">${proveedores.nomProveedor}</td>
                <td class="centered border bg-primary-200 text-white">${proveedores.rucProveedor}</td>
                <td class="centered border bg-primary-200 text-white">${proveedores.dirProveedor}</td>
                <td class="centered border bg-primary-200 text-white">${proveedores.telProveedor}</td>
                <td class="centered border bg-primary-200 text-white">${proveedores.correoProveedor}</td>
                <td class="centered border bg-primary-200 text-white">${proveedores.estadoProveedor}</td>
                <td class="centered border bg-primary-200 text-white">
                    <button onclick="editarFilaProveedor(${id});" data-bs-toggle="modal" data-bs-target="#modalProveedores" class="btn btn-success bi bi-pencil-square"></button>
                    <button onclick="eliminarFilaProveedor(${id});" class="btn btn-danger bi bi-trash3"></button>
                </td>
            </tr>`;
            tablaProveedoresBody.innerHTML = contensBody; 
        });
    }catch(ex){
        alert(ex);
        console.log('No se pudo cargar');
    }
}

function editarFilaProveedor(idFila){
    var codProveedor = document.getElementById('codigoProveedor_' + idFila).textContent;
    var pos = buscarPosProveedor(codProveedor);
    
    document.getElementById('codProveedor').value = proveedores[pos].codProveedor;
    document.getElementById('nomProveedor').value = proveedores[pos].nomProveedor;
    document.getElementById('rucProveedor').value = proveedores[pos].rucProveedor;
    document.getElementById('telProveedor').value = proveedores[pos].telProveedor;
    document.getElementById('dirProveedor').value = proveedores[pos].dirProveedor;
    document.getElementById('correoProveedor').value = proveedores[pos].correoProveedor;

    document.getElementById('fechaCProveedor').textContent = formatearFechaDT(proveedores[pos].fechaCreacionProveedor);
    document.getElementById('fechaMProveedor').textContent = formatearFechaDT(proveedores[pos].fechaModificacionProveedor);
    document.getElementById('usuarioCProveedor').textContent = proveedores[pos].usuarioCreacionProveedor;
    document.getElementById('usuarioMProveedor').textContent = proveedores[pos].usuarioModificacionProveedor;

    var selecEstado = document.getElementById('estadoProveedor');
    for (var i = 0; i < selecEstado.options.length; i++) {
        if (selecEstado.options[i].value === proveedores[pos].estadoProveedor) {
            selecEstado.options[i].selected = true;
            break;
        }
    }
}

function buscarPosProveedor(cod){
    let pos = -1;
    for(let x = 0; x < proveedores.length; x++){
        if(cod == proveedores[x].codProveedor){
            pos = x;
            break;
        }
    }
    return pos;
}

function agregarProveedor(){
    document.getElementById('codProveedor').value = codigoMayor() + 1;
    document.getElementById('labelAgregarModificar').textContent = 'Agregar Proveedor';
    $('#modalProveedores').modal('show');
};
function cancelarAgregarProveedor(){
    document.getElementById('formProveedores').reset();
    $('#modalProveedores').modal('hide');
};
function codigoMayor(){
    let may;
    for(let x = 0; x < proveedores.length; x++){
        if(x == 0){
            may = proveedores[x].codProveedor;
        }else{
            if(proveedores[x].codProveedor > may){
                may = proveedores[x].codProveedor;
            }
        }
    }
    return may;
};
function guardarProveedor(event){
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
        }, false)
    })
    if(document.getElementById('formProveedores').checkValidity()){
        let codigoProveedor_ = parseInt(document.getElementById('codProveedor').value);
        let modificacion = buscarPosProveedor(codigoProveedor_);
    
        if(modificacion !== -1){
            proveedores[modificacion].codProveedor = parseInt(document.getElementById('codProveedor').value);
            proveedores[modificacion].nomProveedor = (document.getElementById('nomProveedor').value).toUpperCase();
            proveedores[modificacion].rucProveedor = document.getElementById('rucProveedor').value;
            proveedores[modificacion].telProveedor = document.getElementById('telProveedor').value;
            proveedores[modificacion].dirProveedor = document.getElementById('dirProveedor').value;
            proveedores[modificacion].correoProveedor = (document.getElementById('correoProveedor').value).toLowerCase();
            proveedores[modificacion].estadoProveedor = document.getElementById('estadoProveedor').value;
    
            proveedores[modificacion].fechaModificacionProveedor = fechaHoraActualReturn();
            proveedores[modificacion].usuarioModificacionProveedor = usuLogeado.usuario;
    
            localStorage.setItem('lSProveedores', JSON.stringify(proveedores));
            tablaCargada();
            $('#modalProveedores').modal('hide'); 
        }else{  // Se guarda como nuevo Proveedor
            let nuevoProveedor= {
                codProveedor: parseInt(document.getElementById('codProveedor').value),
                nomProveedor: (document.getElementById('nomProveedor').value).toUpperCase(),
                rucProveedor: document.getElementById('rucProveedor').value,
                dirProveedor: document.getElementById('dirProveedor').value,
                telProveedor: document.getElementById('telProveedor').value,
                correoProveedor: (document.getElementById('correoProveedor').value).toLowerCase(),
                estadoProveedor: document.getElementById('estadoProveedor').value,
                fechaCreacionProveedor: fechaHoraActualReturn(),
                fechaModificacionProveedor: '',
                usuarioCreacionProveedor: usuLogeado.usuario,
                usuarioModificacionProveedor: ''
            }
    
            proveedores.push(nuevoProveedor);
            localStorage.setItem('lSProveedores', JSON.stringify(proveedores));
            tablaCargada();
            $('#modalProveedores').modal('hide'); 
        }
    }
    event.preventDefault();
}

async function cerrarSesion(){
    Swal.fire({
        title: "Cerrar Sesion?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Si",
        cancelButtonText: "No"
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'index.html';
            sessionStorage.clear();
        }
    });
}

function volver(){
    let user = JSON.parse(sessionStorage.getItem('usuarioLogeado'));
    switch (user.rol) {
        case 'Admin':
            window.location.href = 'menuAdmin.html';
            break;
        case 'Cajero':
                window.location.href = 'menuCajero.html';
            break;
        case 'Stock':
                window.location.href = 'menuStock.html';
            break;
        default:
            // Código para el caso por defecto
    }
}
async function eliminarFilaProveedor(idFila){
    // Obtener la fila actual
    var fila = document.getElementById('fila_' + idFila);
    var codProveedor = document.getElementById('codigoProveedor_' + idFila).textContent;
    var posEliminado = buscarPosProveedor(codProveedor);
    //if(!verificarUsoCliente(codCliente)){
        Swal.fire({
            title: "Eliminar Proveedor?",
            text: "Una vez eliminado no se puede recuperar",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "si, Eliminar"
        }).then((result) => {
            if (result.isConfirmed) {
                
                proveedores.splice(posEliminado, 1);
                localStorage.setItem('lSProveedores', JSON.stringify(proveedores));
                // Eliminar la fila
                fila.remove();
                tablaCargada();
                Swal.fire({
                    title: "Proveedor Eliminado",
                    text: "",
                    icon: "success"
                });
            }
        });
    // }else{
    //     Swal.fire({
    //         title: "Cliente en uso",
    //         text: "Este cliente no se puede borrar",
    //         icon: "error",
    //         showConfirmButton: true,
    //         timer: 2000
    //     });
    
    // }
};










function formatearFechaDT(datetimeLocal) {
    if(datetimeLocal !== ''){
        let fechaHora = new Date(datetimeLocal);
    
        let dia = ('0' + fechaHora.getDate()).slice(-2); // Añade un cero inicial si es necesario
        let mes = ('0' + (fechaHora.getMonth() + 1)).slice(-2); // Los meses comienzan desde 0, por lo que se añade 1
        let año = fechaHora.getFullYear();
        let horas = ('0' + fechaHora.getHours()).slice(-2);
        let minutos = ('0' + fechaHora.getMinutes()).slice(-2);
    
        return `${dia}/${mes}/${año} ${horas}:${minutos}`;
    }
    return '';
};
function fechaHoraActualReturn() {
    var fechaActual = new Date();

    // Obtener la fecha en formato YYYY-MM-DD
    var year = fechaActual.getFullYear();
    var month = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
    var day = fechaActual.getDate().toString().padStart(2, '0');

    // Obtener la hora en formato HH:MM
    var hours = fechaActual.getHours().toString().padStart(2, '0');
    var minutes = fechaActual.getMinutes().toString().padStart(2, '0');

    // Formatear la fecha y hora como YYYY-MM-DDTHH:MM
    var fechaHora = `${year}-${month}-${day}T${hours}:${minutes}`;

    // Establecer el valor del input
    return fechaHora;
};