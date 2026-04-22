/* ============================================
   PORTFÓLIO — DIEGO GOBBIS
   Script Principal
   Todos os comentários estão em português
============================================ */


/* ============================================
   MENU MOBILE — ABRIR / FECHAR GAVETA LATERAL
============================================ */
const btnMenuToggle  = document.getElementById('menu-toggle');
const menuMobile     = document.getElementById('menu-mobile');
const btnMenuFechar  = document.getElementById('menu-close');
const menuOverlay    = document.getElementById('menu-overlay');
const linksMenuMobile = menuMobile.querySelectorAll('a');

/* Abre a gaveta lateral e bloqueia o scroll */
function abrirMenuMobile() {
    menuMobile.classList.add('aberto');
    menuOverlay.classList.add('aberto');
    document.body.style.overflow = 'hidden';
}

/* Fecha a gaveta lateral e restaura o scroll */
function fecharMenuMobile() {
    menuMobile.classList.remove('aberto');
    menuOverlay.classList.remove('aberto');
    document.body.style.overflow = '';
}

btnMenuToggle.addEventListener('click', abrirMenuMobile);
btnMenuFechar.addEventListener('click', fecharMenuMobile);
menuOverlay.addEventListener('click', fecharMenuMobile);

/* Fecha o menu ao clicar em qualquer link interno */
linksMenuMobile.forEach(link => link.addEventListener('click', fecharMenuMobile));


/* ============================================
   NAVBAR — FUNDO TRANSLÚCIDO AO ROLAR E LINK ATIVO
============================================ */
const navbar    = document.getElementById('navbar');
const navLinks  = document.querySelectorAll('.nav-link');
const secoes    = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    /* Adiciona fundo ao rolar mais de 80px */
    navbar.classList.toggle('scrolled', window.scrollY > 80);
    destacarLinkAtivo();
});

/* Marca o link da navbar correspondente à seção visível */
function destacarLinkAtivo() {
    let secaoAtual = '';

    secoes.forEach(secao => {
        /* A seção é considerada ativa quando sua borda superior está 120px acima do topo da viewport */
        if (window.scrollY >= secao.offsetTop - 120) {
            secaoAtual = secao.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle('ativo', link.getAttribute('href') === `#${secaoAtual}`);
    });
}


/* ============================================
   ANIMAÇÃO DE DIGITAÇÃO NO HERO
============================================ */
const elementoTextoDigitado = document.getElementById('typing-text');

/* Palavras que serão exibidas em sequência */
const palavrasDigitadas = ['Front-End', 'JavaScript', 'UI Developer', 'CSS3', 'HTML5'];

let indicePalavra  = 0;   /* Qual palavra está sendo exibida */
let indiceCaracter = 0;   /* Quantos caracteres foram digitados */
let estaDigitando  = true;/* true = digitando, false = apagando */
let estaPausando   = false;/* pausa entre digitar e apagar */

/* Função recursiva que controla o efeito de digitação */
function executarDigitacao() {
    const palavraAtual = palavrasDigitadas[indicePalavra];

    /* Aguarda 1,5s após terminar de digitar antes de apagar */
    if (estaPausando) {
        estaPausando = false;
        setTimeout(executarDigitacao, 1500);
        return;
    }

    if (estaDigitando) {
        /* Adiciona um caractere à palavra exibida */
        elementoTextoDigitado.textContent = palavraAtual.substring(0, indiceCaracter + 1);
        indiceCaracter++;

        /* Ao terminar a palavra, entra em pausa antes de apagar */
        if (indiceCaracter === palavraAtual.length) {
            estaDigitando = false;
            estaPausando  = true;
        }

        setTimeout(executarDigitacao, 100);
    } else {
        /* Remove um caractere por vez */
        elementoTextoDigitado.textContent = palavraAtual.substring(0, indiceCaracter - 1);
        indiceCaracter--;

        /* Ao apagar tudo, passa para a próxima palavra */
        if (indiceCaracter === 0) {
            estaDigitando  = true;
            indicePalavra  = (indicePalavra + 1) % palavrasDigitadas.length;
        }

        setTimeout(executarDigitacao, 50);
    }
}

/* Inicia a animação após 600ms para a página carregar primeiro */
setTimeout(executarDigitacao, 600);


/* ============================================
   ANIMAÇÕES DE ENTRADA AO ROLAR (Intersection Observer)
============================================ */
const elementosParaAnimar = document.querySelectorAll('[data-animate]');

const observadorEntrada = new IntersectionObserver(
    (entradas) => {
        entradas.forEach((entrada, indice) => {
            if (entrada.isIntersecting) {
                /* Aplica um atraso progressivo para criar efeito em cascata */
                setTimeout(() => {
                    entrada.target.classList.add('visivel');
                }, indice * 120);

                /* Remove da observação após animar (cada elemento anima apenas uma vez) */
                observadorEntrada.unobserve(entrada.target);
            }
        });
    },
    {
        threshold: 0.12,         /* Dispara quando 12% do elemento está visível */
        rootMargin: '-40px 0px', /* Margem negativa para animar um pouco depois de entrar */
    }
);

elementosParaAnimar.forEach(el => observadorEntrada.observe(el));


/* ============================================
   PARTÍCULAS FLUTUANTES NO FUNDO DO HERO
============================================ */
const containerParticulas = document.getElementById('particles');

function criarParticulas() {
    const quantidade = 30;

    /* Injeta a animação de flutuação no <head> */
    const estiloParticulas = document.createElement('style');
    estiloParticulas.textContent = `
        @keyframes particula-flutuar {
            0%   { transform: translate(0, 0) scale(1);   opacity: 0.4; }
            50%  { transform: translate(20px, -30px) scale(1.2); opacity: 0.15; }
            100% { transform: translate(-15px, 20px) scale(0.8); opacity: 0.3; }
        }
    `;
    document.head.appendChild(estiloParticulas);

    for (let i = 0; i < quantidade; i++) {
        const particula = document.createElement('div');

        /* Valores aleatórios para cada partícula */
        const tamanho  = Math.random() * 3 + 1;
        const posX     = Math.random() * 100;
        const posY     = Math.random() * 100;
        const duracao  = Math.random() * 15 + 8;
        const atraso   = Math.random() * 8;
        const opacidade = Math.random() * 0.4 + 0.1;

        particula.style.cssText = `
            position: absolute;
            width:  ${tamanho}px;
            height: ${tamanho}px;
            background: rgba(59, 130, 246, ${opacidade});
            border-radius: 50%;
            left: ${posX}%;
            top:  ${posY}%;
            animation: particula-flutuar ${duracao}s ${atraso}s ease-in-out infinite alternate;
            pointer-events: none;
        `;

        containerParticulas.appendChild(particula);
    }
}

criarParticulas();


/* ============================================
   FORMULÁRIO DE CONTATO — ENVIAR VIA WHATSAPP
============================================ */
function enviarWhatsApp(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById('nome').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação básica
    if (!nome || !mensagem) {
        alert('Por favor, preencha pelo menos o nome e a mensagem.');
        return;
    }

    // Monta a mensagem para o WhatsApp
    let texto = `Olá, sou ${nome}.`;
    if (assunto) {
        texto += ` Assunto: ${assunto}.`;
    }
    texto += ` Mensagem: ${mensagem}`;

    // Codifica o texto para URL
    const textoCodificado = encodeURIComponent(texto);

    // Link do WhatsApp
    const linkWhatsApp = `https://wa.me/5534997666593?text=${textoCodificado}`;

    // Abre o WhatsApp em nova aba
    window.open(linkWhatsApp, '_blank');
}


/* ============================================
   MODAL DE CERTIFICADO — VISUALIZAÇÃO EM TELA CHEIA
============================================ */
const cardsCertificados  = document.querySelectorAll('.cert-card');
const modalCert          = document.getElementById('cert-modal');
const imgModalCert       = document.getElementById('cert-modal-img');
const btnFecharModal     = document.getElementById('cert-modal-close');
const overlayModalCert   = document.getElementById('cert-modal-overlay');

/* Abre o modal ao clicar em qualquer card de certificado */
cardsCertificados.forEach(card => {
    card.addEventListener('click', () => {
        const imagem = card.querySelector('.cert-imagem img');
        imgModalCert.src = imagem.src;
        imgModalCert.alt = imagem.alt;
        modalCert.classList.add('aberto');
        document.body.style.overflow = 'hidden';
    });
});

/* Fecha o modal */
function fecharModalCert() {
    modalCert.classList.remove('aberto');
    document.body.style.overflow = '';
}

btnFecharModal.addEventListener('click', fecharModalCert);
overlayModalCert.addEventListener('click', fecharModalCert);

/* Fecha também com a tecla Escape */
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') fecharModalCert();
});


/* ============================================
   FORMULÁRIO DE CONTATO — ENVIO VIA WHATSAPP
============================================ */
const formulario = document.getElementById('contato-form');

formulario.addEventListener('submit', e => {
    e.preventDefault();

    const nome     = document.getElementById('nome').value.trim();
    const email    = document.getElementById('email').value.trim();
    const assunto  = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    /* Validação dos campos obrigatórios */
    if (!nome) {
        exibirToast('Por favor, informe seu nome.', 'erro');
        return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        exibirToast('Por favor, informe um e-mail válido.', 'erro');
        return;
    }
    if (!mensagem) {
        exibirToast('Por favor, escreva sua mensagem.', 'erro');
        return;
    }

    /* Monta a mensagem formatada para o WhatsApp */
    const assuntoTexto = assunto ? `*Assunto:* ${assunto}\n\n` : '';
    const textoWA = `Olá Diego! 👋\n\nMeu nome é *${nome}* (${email}).\n\n${assuntoTexto}${mensagem}`;
    const urlWA   = `https://wa.me/5534997666593?text=${encodeURIComponent(textoWA)}`;

    window.open(urlWA, '_blank');

    exibirToast('Redirecionando para o WhatsApp!', 'sucesso');
    formulario.reset();
});


/* ============================================
   TOAST — NOTIFICAÇÃO TEMPORÁRIA NA TELA
============================================ */
function exibirToast(mensagem, tipo = 'sucesso') {
    /* Remove toast anterior se ainda estiver na tela */
    document.querySelector('.toast-notificacao')?.remove();

    const icone = tipo === 'sucesso' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
    const cor   = tipo === 'sucesso' ? '#10b981'             : '#ef4444';

    /* Adiciona animação de entrada ao documento (apenas uma vez) */
    if (!document.getElementById('estilo-toast')) {
        const estilo = document.createElement('style');
        estilo.id = 'estilo-toast';
        estilo.textContent = `
            @keyframes toast-entrar  { from { transform: translateX(120%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
            @keyframes toast-sair    { from { transform: translateX(0);    opacity: 1; } to { transform: translateX(120%); opacity: 0; } }
        `;
        document.head.appendChild(estilo);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-notificacao';
    toast.style.cssText = `
        position: fixed;
        bottom: 32px; right: 32px;
        background: #161b22;
        border: 1px solid ${cor};
        border-radius: 12px;
        padding: 16px 20px;
        display: flex;
        align-items: center;
        gap: 12px;
        z-index: 9999;
        box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        animation: toast-entrar 0.35s ease forwards;
        font-size: 14px;
        color: #e6edf3;
        max-width: 320px;
        font-family: 'Inter', sans-serif;
    `;
    toast.innerHTML = `
        <i class="${icone}" style="color:${cor}; font-size:18px; flex-shrink:0;"></i>
        <span>${mensagem}</span>
    `;
    document.body.appendChild(toast);

    /* Remove o toast após 4 segundos com animação de saída */
    setTimeout(() => {
        toast.style.animation = 'toast-sair 0.35s ease forwards';
        setTimeout(() => toast.remove(), 350);
    }, 4000);
}


/* ============================================
   SCROLL SUAVE PARA LINKS INTERNOS
   (Compensa a altura fixa da navbar)
============================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const destino = document.querySelector(link.getAttribute('href'));
        if (!destino) return;

        /* Desconta 80px referentes à altura da navbar */
        const posicaoAlvo = destino.offsetTop - 80;

        window.scrollTo({ top: posicaoAlvo, behavior: 'smooth' });
    });
});
