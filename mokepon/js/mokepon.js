function iniciarJuego () {
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
    let mascotaSeleccionada = document.querySelectorAll("input[name='mascota']");
    let spanMascotaJugador = document.getElementById('mascota-jugador');
    // for ( let i= 0; i > mascotaSeleccionada.length; i++) {
    //     if (mascotaSeleccionada == i) {
    //         alert('Seleccionaste ')
    //     } else {
    //         alert('EROOR')
    //     }
    // }
    
    if (mascotaSeleccionada[0].checked) {
        spanMascotaJugador.innerHTML = 'HIPODOGE';
    } else if (mascotaSeleccionada[1].checked) {
        spanMascotaJugador.innerHTML = 'CAPIPEPO';
    } else if (mascotaSeleccionada[2].checked) {
        spanMascotaJugador.innerHTML = 'RATIGUEYA';
    } else if (mascotaSeleccionada[3].checked) {
        spanMascotaJugador.innerHTML = 'LANGOSTELVIS';
    } else if (mascotaSeleccionada[4].checked) {
        spanMascotaJugador.innerHTML= 'TUCAPALMA';
    } else if (mascotaSeleccionada[5].checked) {
        spanMascotaJugador.innerHTML = 'PYDOS';
    } else {
        alert('NO HAS SELECCIONADO NADA, SELECCIONA UNA MASCOTA!');
    }
}

window.addEventListener('load', iniciarJuego);