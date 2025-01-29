// Contador regressivo
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const tempoRestante = () => {
    const dataAtual = new Date();
    const dataFutura = new Date(dataAtual.getTime() + 48 * 60 * 60 * 1000); // 48 horas no futuro

    const totalSegundos = (dataFutura - dataAtual) / 1000;

    const horasRestantes = Math.floor(totalSegundos / 3600) % 24;
    const minutosRestantes = Math.floor(totalSegundos / 60) % 60;
    const segundosRestantes = Math.floor(totalSegundos) % 60;

    horas.textContent = formatarTempo(horasRestantes);
    minutos.textContent = formatarTempo(minutosRestantes);
    segundos.textContent = formatarTempo(segundosRestantes);
};

const formatarTempo = (tempo) => {
    return tempo < 10 ? `0${tempo}` : tempo;
};

setInterval(tempoRestante, 1000);

// FAQ Interativo
const faqCards = document.querySelectorAll('.faq-card');

faqCards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('ativo');
    });
});

// Animação de scroll
const sections = document.querySelectorAll('section');

const animacaoScroll = () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animacaoScroll);
animacaoScroll();