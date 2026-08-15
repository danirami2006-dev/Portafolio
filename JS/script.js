 /* ==========================================
       1. LÓGICA DEL CARRUSEL DE IMÁGENES
       ========================================== */
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const tiempoDeEspera = 5000;

    function siguienteFoto() {
        if (totalSlides === 0) return; // Evita errores si no hay slides
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.add('active');
    }

    // Inicia el temporizador de manera correcta
    setInterval(siguienteFoto, tiempoDeEspera);


    /* ==========================================
       2. LÓGICA PARA CAMBIAR ETAPAS (VIDEOS)
       ========================================== */
    function cambiarEtapa(etapaNombre) {
        // 1. Ocultar todas las etapas
        const todasLasEtapas = document.querySelectorAll('.etapa-contenedor');
        todasLasEtapas.forEach(etapa => {
            etapa.classList.remove('active');
        });

        // 2. Mostrar la etapa seleccionada
        const etapaSeleccionada = document.getElementById('etapa-' + etapaNombre);
        if (etapaSeleccionada) {
            etapaSeleccionada.classList.add('active');
        }
    }

const btnArriba = document.getElementById('btn-volver-arriba');

window.addEventListener('scroll', () => {
    // CONDICIONAL: Muestra el botón solo si bajaste más de 300px en la página
    if (window.scrollY > 300) {
        btnArriba.classList.add('visible');
    } else {
        btnArriba.classList.remove('visible');
    }
});

function volverArriba() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave hacia arriba
    });
}

