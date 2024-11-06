let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const carouselText = document.querySelector('.carousel-text'); // Referencia diretamente a div existente no HTML

// Textos para cada slide
const slideTexts = [
    "CAMISA TECSESP",
    "CAMISA PRETA POLO",
    "MOLETOM PRETO"
];

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100; // Move o carrossel horizontalmente
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;

    // Atualiza o texto
    carouselText.innerText = slideTexts[currentSlide];
}

// Funções de navegação
function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Configura o intervalo para mudar de slide a cada 3 segundos
setInterval(() => {
    nextSlide();
}, 3000); // 3000 milissegundos = 3 segundos

// Inicializa o texto ao carregar a página
showSlide(currentSlide);
