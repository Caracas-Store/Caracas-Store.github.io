document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const btn = document.getElementById("tabela-medida");
    const span = document.getElementsByClassName("close")[0];

    // Quando o usuário clicar no link, abre o modal
    btn.onclick = function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link
        modal.style.display = "block";
    }

    // Quando o usuário clicar no botão de fechar, fecha o modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Quando o usuário clicar fora do modal, fecha
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

// Supondo que você tenha um botão que abre o pop-up
const openPopupButton = document.getElementById('open-popup');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('close-popup');

// Função para abrir o pop-up
openPopupButton.addEventListener('click', function() {
    popup.style.display = 'block'; // Exibe o pop-up
});

// Função para fechar o pop-up
closeButton.addEventListener('click', function() {
    popup.style.display = 'none'; // Esconde o pop-up
});

// Escuta o evento de pressionar a tecla "voltar"
window.addEventListener('popstate', function(event) {
    // Verifica se o pop-up está visível
    if (popup.style.display === 'block') {
        popup.style.display = 'none'; // Fecha o pop-up
        // Aqui você pode adicionar a lógica para voltar à tela de compra se necessário
        // Exemplo: window.history.back();
    }
});

// Função para gerenciar a abertura e fechamento do pop-up
function togglePopup() {
    if (popup.style.display === 'block') {
        window.history.back(); // Adiciona um novo estado na história
    } else {
        popup.style.display = 'block'; // Exibe o pop-up
        window.history.pushState({}, 'popup'); // Adiciona um estado ao histórico
    }
}