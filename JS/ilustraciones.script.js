// Función para abrir la imagen en pantalla completa con el fondo lila
function abrirModal(rutaImagen) {
    const modal = document.getElementById('modal-visor');
    const imgModal = document.getElementById('img-modal-ampliada');
    
    if (modal && imgModal) {
        imgModal.src = rutaImagen;
        modal.style.display = 'flex';
    }
}

// Función para cerrar la imagen
function cerrarModal() {
    const modal = document.getElementById('modal-visor');
    if (modal) {
        modal.style.display = 'none';
    }
}

function abrirModal(elemento) {
    // Busca la imagen de la ilustración dentro del contenedor donde se hizo clic
    const imgObj = elemento.querySelector('.img-cuadrada') || elemento.querySelector('.img-ilustracion');
    
    if (imgObj) {
        const rutaImagen = imgObj.src;
        
        // Asumiendo que tu modal usa una etiqueta <img> con id 'imagen-modal' o similar
        const modal = document.getElementById('modal-visor');
        const imgModal = document.getElementById('img-modal-ampliada');
        
        if (modal && imgModal) {
            imgModal.src = rutaImagen;
            modal.style.display = 'flex';
        }
    }
}

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.getElementById('modal-visor');
    if (modal) {
        modal.style.display = 'none';
    }
}
