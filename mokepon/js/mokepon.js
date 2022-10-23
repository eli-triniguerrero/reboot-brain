function iniciarJuego () {
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
    alert('Hiciste clic clic clic )))')
}

window.addEventListener('load', iniciarJuego);