function selectSize(element) {
    // Remove a classe 'selected' de todos os elementos de tamanho
    document.querySelectorAll('.tamanho div').forEach(div => {
        div.classList.remove('selected');
    });

    // Adiciona a classe 'selected' ao elemento clicado
    element.classList.add('selected');
}