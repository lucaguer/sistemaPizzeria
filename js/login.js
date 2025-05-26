let usuarios = JSON.parse(localStorage.getItem('lSUsuarios'));
let logeado = false;
let user; // Declarar la variable user

window.addEventListener("load", async () => {
    sessionStorage.setItem('login', false);
});

// Función para Login
function login(event) {
    event.preventDefault();
    let usuario_login = document.getElementById("usuario").value;
    let contraseña = document.getElementById("password").value;

    if (usuario_login !== "" && contraseña !== "") {
        for (let i = 0; i < usuarios.length; i++) {
            if (usuario_login == usuarios[i].usuario && contraseña === usuarios[i].contraseña) {
                user = i;
                logeado = true;
                break;
            }
        }
        if (logeado == false) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Usuario o contraseña incorrecta",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    if (logeado == true) {
        if (usuarios[user].estado === 'Activo') {
            sessionStorage.setItem('usuarioLogeado', JSON.stringify(usuarios[user]));
            sessionStorage.setItem('login', true);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Inicio de sesión exitoso",
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                switch (usuarios[user].rol) {
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
                }
            });
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Usuario Inactivo',
                timer: 2000
            });
        }
    }
    return false;
}