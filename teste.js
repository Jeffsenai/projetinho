// reloginho
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');


const dataFutura = new Date(new Date().getTime() + 48 * 60 * 60 * 1000);

const tempoRestante = () => {
    const dataAtual = new Date();
    const totalSegundos = (dataFutura - dataAtual) / 1000;

    
    if (totalSegundos <= 0) {
        horas.textContent = '00';
        minutos.textContent = '00';
        segundos.textContent = '00';
        return;
    }

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


tempoRestante();


// abrir quando clica nas perguntas frequentes

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





// Cronômetro da faixa superior
const cronometroHoras = document.getElementById('cronometro-horas');
const cronometroMinutos = document.getElementById('cronometro-minutos');
const cronometroSegundos = document.getElementById('cronometro-segundos');

// Define a data futura (48 horas a partir de agora)
const dataFuturaCronometro = new Date();
dataFuturaCronometro.setHours(dataFuturaCronometro.getHours() + 48);

const atualizarCronometro = () => {
    const dataAtual = new Date();
    const diferenca = dataFuturaCronometro - dataAtual; // Diferença em milissegundos

    // Verifica se o tempo acabou
    if (diferenca <= 0) {
        cronometroHoras.textContent = '00';
        cronometroMinutos.textContent = '00';
        cronometroSegundos.textContent = '00';
        return;
    }

    // Converte a diferença para horas, minutos e segundos
    const horasRestantes = Math.floor(diferenca / (2000 * 60 * 60));
    const minutosRestantes = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundosRestantes = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Atualiza o cronômetro
    cronometroHoras.textContent = formatarTempo2(horasRestantes);
    cronometroMinutos.textContent = formatarTempo2(minutosRestantes);
    cronometroSegundos.textContent = formatarTempo2(segundosRestantes);
};

// Formata o tempo para sempre ter dois dígitos
const formatarTempo2 = (tempo) => {
    return tempo < 10 ? `0${tempo}` : tempo;
};

// Inicia o cronômetro
const intervalo = setInterval(atualizarCronometro, 1000);
atualizarCronometro(); // Chama a função imediatamente para evitar atraso inicial