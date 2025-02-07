// Obtém os elementos
const modal = document.getElementById("videoModal");
const openModal = document.getElementById("openModal");
const closeModal = document.querySelector(".close");
const videoPlayer = document.getElementById("videoPlayer");

// Abre o modal ao clicar na imagem
openModal.onclick = function() {
    modal.style.display = "flex"; // AGORA O MODAL SÓ APARECE APÓS O CLIQUE
    videoPlayer.play(); // Começa a reprodução do vídeo automaticamente
};

// Fecha o modal ao clicar no botão "×"
closeModal.onclick = function() {
    modal.style.display = "none";
    videoPlayer.pause(); // Pausa o vídeo ao fechar
    videoPlayer.currentTime = 0; // Reinicia o vídeo
};

// Fecha o modal ao clicar fora do vídeo
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    }
};
