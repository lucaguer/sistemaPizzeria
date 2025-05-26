let usuLogeado = JSON.parse(sessionStorage.getItem('usuarioLogeado'));
let usuarios = JSON.parse(localStorage.getItem('lSUsuarios'));


window.addEventListener("load", async () => {
    const modal = new bootstrap.Modal(document.getElementById('modalIniciarSesion'));
    modal.show();
    if (!sessionStorage.getItem('usuarioLogeado')) {
        Swal.fire({
            position: "center",
            icon: "info",
            title: "Inicio de sesión requerido",
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            // Redirigir al usuario después de que el usuario haya cerrado el mensaje de éxito
            window.location.href = 'index.html';
        });

    } else {
        cargarDatosUsuario()
        modal.hide();
    }
});

function cargarDatosUsuario(){
    document.getElementById('usuarioLogeadoNavbar').textContent = usuLogeado.usuario;
    document.getElementById('nombreUsuario').textContent = usuLogeado.usuario;
    document.getElementById('nombreApellidoPerfil').textContent = usuLogeado.nombre + ' ' + usuLogeado.apellido;
    document.getElementById('correoPerfil').textContent = usuLogeado.correo;
    document.getElementById('telefonoPerfil').textContent = usuLogeado.telefono;
};

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
                    usuarios[pos].nombre = document.getElementById('nombreEditUsuario').value;
                    usuarios[pos].apellido = document.getElementById('apellidoEditUsuario').value;
                    usuarios[pos].correo = document.getElementById('correoEditUsuario').value;
                    usuarios[pos].usuario = document.getElementById('usuarioEditUsuario').value;
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
            usuarios[pos].nombre = document.getElementById('nombreEditUsuario').value;
            usuarios[pos].apellido = document.getElementById('apellidoEditUsuario').value;
            usuarios[pos].correo = document.getElementById('correoEditUsuario').value;
            usuarios[pos].usuario = document.getElementById('usuarioEditUsuario').value;
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








