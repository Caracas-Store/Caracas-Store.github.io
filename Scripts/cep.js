const cepInput = document.getElementById('cep');

cepInput.addEventListener('input', function (e) {
    // Remove tudo que não é dígito
    let cepValue = this.value.replace(/\D/g, '');

    // Adiciona a máscara no formato XXXXX-XXX
    if (cepValue.length > 5) {
        cepValue = cepValue.replace(/^(\d{5})(\d)/, '$1-$2');
    }

    this.value = cepValue;
});