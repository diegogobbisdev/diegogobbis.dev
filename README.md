# Portfólio — Diego Gobbis

Site de portfólio pessoal desenvolvido com HTML, CSS e JavaScript puro.  
Apresenta minha trajetória como desenvolvedor front-end, projetos reais entregues, certificados e canais de contato.

**Acesse:** https://diegogobbisdev.github.io/Portifolio

---

## Tecnologias

- HTML5 semântico
- CSS3 puro (sem framework)
- JavaScript Vanilla (sem biblioteca)
- Google Fonts — Inter (interface) e Fira Code (elementos de código)
- Font Awesome 6 para ícones

---

## Seções

| Seção | Descrição |
|---|---|
| Hero | Apresentação com foto, efeito de digitação, badge de disponibilidade e botões de ação |
| Sobre | Bio pessoal, localização, formação e grade de tecnologias organizadas por categoria |
| Projetos | Cards com descrição, destaques, tags de tecnologia e links para demo e repositório |
| Certificados | Galeria de certificações com modal de visualização em tela cheia |
| Contato | Formulário que abre o WhatsApp + links diretos para e-mail, LinkedIn e GitHub |

---

## Projetos exibidos

**Controle de Caixa** — Sistema financeiro web desenvolvido para uso real na empresa onde trabalho. Substituiu o fechamento de caixa manual e a planilha de cheques. Utilizado diariamente pelos funcionários, com autenticação por usuário, alertas de cheques vencendo e relatórios para impressão. Dados persistidos em LocalStorage, sem necessidade de servidor.

**JoiÓtica — Landing Page** — Landing page desenvolvida para uma joalheria e ótica real, atualmente em uso pelo cliente. Catálogo interativo com quatro categorias, menu mobile deslizante e CTA direto via WhatsApp.

---

## Funcionalidades

- Partículas flutuantes animadas no fundo da seção hero (geradas via JavaScript)
- Efeito de digitação no título, com sequência de palavras configurável
- Menu hambúrguer com gaveta lateral deslizante e bloqueio de scroll no body
- Navbar com fundo translúcido ao rolar + link ativo atualizado conforme a seção visível
- Animação de entrada em cascata nos cards ao entrar na viewport (Intersection Observer)
- Modal de certificados com abertura ao clicar e fechamento por tecla Escape
- Formulário de contato com validação de campos e envio formatado via WhatsApp
- Toast de notificação com animação de entrada e saída
- Scroll suave nos links internos compensando a altura fixa da navbar

---

## Acessibilidade

- `lang="pt-BR"` no documento
- `aria-label` em botões e links de ícone
- Foco visível para navegação por teclado
- Scroll restaurado corretamente ao fechar menus e modais

---

## Estrutura

```
Portifolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── imagens/
│   ├── foto perfil.jpg
│   ├── projeto-controle-caixa.png
│   ├── projeto - landing page joiotica.png
│   ├── curso - santander front-end.jpg
│   ├── curso - html developer.jpg
│   ├── curso - css web developer.jpg
│   ├── curso - javascritp developer.jpg
│   └── curso - ri happy.jpg
└── cv/
    └── curriculo.png
```

---

## Como rodar localmente

Abra o `index.html` diretamente no navegador, ou use a extensão **Live Server** do VS Code para evitar limitações de arquivo local.

---

## Contato

- diegogobbisdev@gmail.com
- linkedin.com/in/diegogobbis
- github.com/diegogobbisdev
- (34) 99766-6593
