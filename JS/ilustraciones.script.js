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
