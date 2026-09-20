<script>
    function abrirModal(rutaImagen) {
        const modal = document.getElementById('modal-visor');
        const imgModal = document.getElementById('img-modal-ampliada');
        
        imgModal.src = rutaImagen;
        modal.style.display = 'flex';
    }

    function cerrarModal() {
        const modal = document.getElementById('modal-visor');
        modal.style.display = 'none';
    }
</script>
