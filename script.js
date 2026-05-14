// Criação de uma timeline do GSAP com animações sincronizadas com o scroll

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.two',
    start: '0% 95%',
    end: '70% 50%',
    scrub: true,
    markers: true //Depuração
  }
});

tl.to(
    '#fanta',
    {
        top: '120%', //quando move para 120% do topo
        left: '0%', //Move elemento para 23% da esquerda
    },
    'orange'
); // Sincronizando a animação com a animação 'orange'

tl.to(
    '#laranja-cortada',
    {
        top: '160%', //quando move para 160% do topo
        left: '23%', //Move elemento para 23% da esquerda
    },
    'orange'
); // Sincronizando a animação com a animação 'orange'
tl.to(
    '#laranja',
    {
        width: '15%', //Aumenta a largura do elemento para 100%
        top: '165%', //quando move para 165% do topo
        right: '5%', //Move elemento para 5% da direita
    },
    'orange'
); // Sincronizando a animação com a animação 'orange'
tl.to(
    '#folha',
    {
        rotate: '430deg', //Rotaciona o elemento para 430 graus
        top: '110%', //quando move para 110% do topo
        left: '70%', //Move elemento para 70% da esquerda
    },
    'orange'
); // Sincronizando a animação com a animação 'orange'
tl.to(
    '#folha2',
    {
        rotate: '530deg', //Rotaciona o elemento para 530 graus
        top: '110%', //quando move para 110% do topo
        left: '0%', //Move elemento para 0% da esquerda
    },
    'orange'
); // Sincronizando a animação com a animação 'orange'

//CRIANDO ANIMAÇÃO PARA A SESSÃO 3

var tl2 = gsap.timeline({
    scrollTrigger: { 
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%', //Fim da animação quando chegar em 20% do topo e 50% da tela
        scrub: true,
        markers: true, //Depuração
    }
});

tl2.from( 
    '.lemon1',
    {
        rotate: '-90deg', //Rotaciona o elemento para -90 graus
        left: '-100%', //Move elemento para -100% da esquerda
        top: '110%', //Move elemento para 110% do topo
    },
    'ca'
);
tl2.from( 
    '.lemon2',
    {
        rotate: '90deg', //Rotaciona o elemento para 90 graus
        left: '100%', //Move elemento para 100% da esquerda
        top: '110%', //Move elemento para 110% do topo
    },
    'ca'
);
tl2.from( 
    '#cocacola',
    {
        rotate: '-90deg', //Rotaciona o elemento para -90 graus
        left: '-100%', //Move elemento para -100% da esquerda
        top: '100%', //Move elemento para 100% do topo
    },
    'ca'
);
tl2.from( 
    '#pepsi',
    {
        rotate: '90deg', //Rotaciona o elemento para 90 graus
        left: '100%', //Move elemento para 100% da esquerda
        top: '100%', //Move elemento para 100% do topo
    },
    'ca'
);
tl2.to( 
    '#laranja-cortada',
    {
        width: '18%', //Aumenta a largura do elemento para 18%
        left: '42%', //Move elemento para 42% da esquerda
        top: '213%', //Move elemento para 213% do topo
    },
    'ca'
);
tl2.to( 
    '#fanta',
    {
        width: '33%', //Aumenta a largura do elemento para 18%
        left: '34.5%', //Move elemento para 42% da esquerda
        top: '222%', //Move elemento para 213% do topo
    },
    'ca'
);


