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

