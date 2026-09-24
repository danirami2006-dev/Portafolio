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
/* ==========================================
   4. ANIMACIÓN INTERACTIVA DE PÉNDULO (MARIN)
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
    const munecaMarin = document.querySelector('.muneca-marin-interactiva');

    if (munecaMarin) {
        munecaMarin.addEventListener('click', () => {
            // Activa o desactiva la clase que genera el movimiento de péndulo
            munecaMarin.classList.toggle('animar-pendulo');
        });
    }
});

/* ==========================================
   5. MIRACULOUS
   ========================================== */
// Rutas de tus dos versiones de ilustraciones
const sliderVersion1 = {
    boton: 'Img/boton2.png',           // Tu primer botón
    pista: 'Img/slid2.png',             // Tu primera pista/slider
    ilustracion: 'Img/adrinette.png',  // Ilustración normal
    titulo: 'Marinette & Adrien'
};

// Versión 2: Transformados (Ladybug & Cat Noir)
const sliderVersion2 = {
    boton: 'Img/boton1.png',           // Tu segundo botón (versión devuelta/transformada)
    pista: 'Img/slid.png',            // Tu segunda pista/slider
    ilustracion: 'Img/ladynoir.png',   // Ilustración héroes
    titulo: 'Ladybug & Cat Noir'
};

let esVersionHeroe = false;

// Evento cuando carga la página
document.addEventListener('DOMContentLoaded', () => {
    const contenedorSlider = document.querySelector('.contenedor-slider');
    
    if (contenedorSlider) {
        contenedorSlider.addEventListener('click', alternarVersionMiraculous);
    }
});

// Función para cambiar botón, pista, dibujo y texto al presionar el slider
function alternarVersionMiraculous() {
    const boton = document.getElementById('boton-ladybug');
    const pista = document.getElementById('pista-slider');
    const imgIlustracion = document.getElementById('ilustracion-miraculous');
    const titulo = document.getElementById('titulo-miraculous');

    if (!esVersionHeroe) {
        // Cambia a la Versión 2 (Héroes)
        if (boton) {
            boton.src = sliderVersion2.boton;
            boton.style.left = '175px'; // Se desplaza a la derecha
        }
        if (pista) pista.src = sliderVersion2.pista;
        if (imgIlustracion) imgIlustracion.src = sliderVersion2.ilustracion;
        if (titulo) titulo.textContent = sliderVersion2.titulo;
        
        esVersionHeroe = true;
    } else {
        // Cambia a la Versión 1 (Normal)
        if (boton) {
            boton.src = sliderVersion1.boton;
            boton.style.left = '8px'; // Regresa a la izquierda
        }
        if (pista) pista.src = sliderVersion1.pista;
        if (imgIlustracion) imgIlustracion.src = sliderVersion1.ilustracion;
        if (titulo) titulo.textContent = sliderVersion1.titulo;
        
        esVersionHeroe = false;
    }
}

// Función para abrir la imagen activa en el modal lila
function abrirModalIlustracion() {
    const imgIlustracion = document.getElementById('ilustracion-miraculous');
    if (imgIlustracion && typeof abrirModal === 'function') {
        abrirModal(imgIlustracion.src);
    }
}
