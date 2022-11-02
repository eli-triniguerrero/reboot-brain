function iniciarJuego () {
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
    let mascotaSeleccionada = document.querySelectorAll("input[name='mascota']");

    // for ( let i= 0; i > mascotaSeleccionada.length; i++) {
    //     if (mascotaSeleccionada[i].checked == i) {
    //         alert('Seleccionaste ')
    //     } else {
    //         alert('EROOR')
    //     }
    // }
    
    if (mascotaSeleccionada[0].checked) {
        alert('Seleccionaste a HIPODOGE');
    } else if (mascotaSeleccionada[1].checked) {
        alert('Seleccionaste a CAPIPEPO');
    } else if (mascotaSeleccionada[2].checked) {
        alert('Seleccionaste a RATIGUEYA');
    } else if (mascotaSeleccionada[3].checked) {
        alert('Seleccionaste a LANGOSTELVIS');
    } else if (mascotaSeleccionada[4].checked) {
        alert('Seleccionaste a TUCAPALMA');
    } else if (mascotaSeleccionada[5].checked) {
        alert('Seleccionaste a PYDOS');
    } else {
        alert('NO HAS SELECCIONADO NADA, SELECCIONA UNA MASCOTA!');
    }
}

window.addEventListener('load', iniciarJuego);