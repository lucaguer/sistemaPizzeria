let ventas = JSON.parse(localStorage.getItem('lSVentas'));
let codVenta = JSON.parse(localStorage.getItem('lSFactura'));
let timbrados = JSON.parse(localStorage.getItem('lSTimbrados'));
let clientes = JSON.parse(localStorage.getItem('lSClientes'));
let articulos = JSON.parse(localStorage.getItem('lSArticulos'));
let usuLogeado = JSON.parse(sessionStorage.getItem('usuarioLogeado'));



window.addEventListener("load", async () => {
    // Obtener el modal
    const modal = new bootstrap.Modal(document.getElementById('modalIniciarSesion'));
    // Mostrar el modal
    modal.show();
    if (!sessionStorage.getItem('usuarioLogeado')) {
        Swal.fire({
            position: "center",
            icon: "info",
            title: "Inicio de sesión requerido",
            showConfirmButton: false,
            timer: 2000
        }).then(() => {
            // Redirigir al usuario después de que el usuario haya cerrado el mensaje de éxito
            window.location.href = 'index.html';
        });

    } else {
        buscarPosVentas(3);
        
        // Cerrar el modal
        modal.hide();
        cargarDatosFactura();
        await print();
    }
});


function cargarDatosFactura(){
    let totalGeneral = 0;
    let totalIva5 = 0;
    let totalIva10 = 0;

    let pos = buscarPosVentas(codVenta);
    document.getElementById('fechaHoraImpresion').textContent = formatearFechaDT(fechaHoraActualReturn());
    document.getElementById('usuarioImpresion').textContent = usuLogeado.usuario;
    let numFactura = ventas[pos].numSucursal + '-' + ventas[pos].numCaja + '-' + ventas[pos].numFactura;
    document.getElementById('numFactSecundaria').textContent = numFactura;
    document.getElementById('numerotimbrado').textContent = ventas[pos].numTimbrado;
    let posTimbrado = buscarPosTinbrado(ventas[pos].numTimbrado);

    document.getElementById('iniVigencia').textContent = formatearFecha(timbrados[posTimbrado].inicioVigencia);
    document.getElementById('finVigencia').textContent = formatearFecha(timbrados[posTimbrado].finVigencia);

    let posCliente = buscarPosCliente(ventas[pos].codCliente);
    let nombre = clientes[posCliente].nombreCliente;
    let apellido = clientes[posCliente].apellidoCliente;

    document.getElementById('codCliente').textContent = ventas[pos].codCliente;
    document.getElementById('nomCliente').textContent = apellido + ', ' + nombre;
    document.getElementById('dirCliente').textContent = clientes[posCliente].direccionCliente;
    document.getElementById('telCliente').textContent = clientes[posCliente].telefono;
    document.getElementById('fechaHora').textContent = formatearFechaDT(ventas[pos].fechaHoraCreacion);
    document.getElementById('rucCliente').textContent = ventas[pos].ruc;
    document.getElementById('nomRazonCliete').textContent = ventas[pos].nombreRazonSocial;
    


    for(x = 0; x < ventas[pos].codArt.length; x++){
        var tr = document.createElement('tr'); 
        var tdArt = document.createElement('td');
        var tdCant = document.createElement('td');
        var tdIva = document.createElement('td');
        var tdPrecio = document.createElement('td');
        var tdTotal = document.createElement('td');

        let posArt = buscarPosArticulo(ventas[pos].codArt[x]);

        tdArt.textContent = articulos[posArt].nombre_art,
        tdCant.textContent = ventas[pos].cantArt[x].toLocaleString();
        tdIva.textContent = ventas[pos].tipoIva[x];
        tdPrecio.textContent = ventas[pos].precioUnit[x].toLocaleString();
        let total = ventas[pos].cantArt[x] * ventas[pos].precioUnit[x];
        tdTotal.textContent = total.toLocaleString();

        tr.appendChild(tdArt);
        tr.appendChild(tdCant);
        tr.appendChild(tdIva);
        tr.appendChild(tdPrecio);
        tr.appendChild(tdTotal);

        console.log(tr);

        document.getElementById('tablaDetalle').appendChild(tr);

        if(ventas[pos].tipoIva[x] == '5%'){
            totalIva5 = totalIva5 + iva5(total);
        }else{
            if(ventas[pos].tipoIva[x] = '10%'){
                totalIva10 = totalIva10 + iva10(total);
            }
        }
        totalGeneral = totalGeneral + total;
    }

    document.getElementById('totalGravado').textContent = (totalGeneral - (totalIva5 + totalIva10)).toLocaleString();
    document.getElementById('iva5').textContent = totalIva5.toLocaleString();
    document.getElementById('iva10').textContent = totalIva10.toLocaleString();
    document.getElementById('subTotal').textContent = totalGeneral.toLocaleString();
}



function buscarPosArticulo(cod){
    let pos_art = -1;
    for(let x = 0; x < articulos.length; x++){
        if(cod == articulos[x].codBarras_art){
            pos_art = x;
            break;
        }
    }
    return pos_art;
}

function buscarPosCliente(cod){
    let pos = -1;
    for(let x = 0; x < clientes.length; x++){
        if(cod == clientes[x].codigoCliente){
            pos = x;
            break;
        }
    }
    return pos;
}

function buscarPosTinbrado(num){
    let pos = -1;
    for(x = 0; x < timbrados.length; x++){
        if(timbrados[x].numTimbrado == num){
            pos = x;
            break;
        }
    }
    return pos;
}

function buscarPosVentas(cod){
    let pos = -1;
    for(let x = 0; x < ventas.length; x++){
        if(ventas[x].codVenta == cod){
            pos = x;
            break;
        }
    }
    return pos;
}

function iva5(valor){
    let iva = Math.ceil(valor / 21);
    return iva;
}
function iva10(valor){
    let iva = Math.ceil(valor / 11);
    return iva;
}


function formatearFecha(date) {
    let fecha = new Date(date);

    let dia = ('0' + fecha.getDate()).slice(-2); // Añade un cero inicial si es necesario
    let mes = ('0' + (fecha.getMonth() + 1)).slice(-2); // Los meses comienzan desde 0, por lo que se añade 1
    let año = fecha.getFullYear();

    return `${dia}/${mes}/${año}`;
}

function formatearFechaDT(datetimeLocal) {
    let fechaHora = new Date(datetimeLocal);

    let dia = ('0' + fechaHora.getDate()).slice(-2); // Añade un cero inicial si es necesario
    let mes = ('0' + (fechaHora.getMonth() + 1)).slice(-2); // Los meses comienzan desde 0, por lo que se añade 1
    let año = fechaHora.getFullYear();
    let horas = ('0' + fechaHora.getHours()).slice(-2);
    let minutos = ('0' + fechaHora.getMinutes()).slice(-2);

    return `${dia}/${mes}/${año} ${horas}:${minutos}`;
}


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
}







