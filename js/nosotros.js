

window.addEventListener("load", async () =>{
    $('#modalIniciarSesion').modal('show');
    if (!sessionStorage.getItem('usuarioLogeado')){
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
        $('#modalIniciarSesion').modal('hide');
    }
})












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