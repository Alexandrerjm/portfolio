let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let btnMostrarProjetos = document.querySelector('.mostrar-projetos');
let btnEsconderProjetos = document.querySelector('.esconder-projetos');
let menuIcon = document.querySelector('#menu-icon');
let navLista = document.querySelector('.nav-lista');

window.onscroll = () =>{
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('ativo');
                document.querySelector('header nav a[href*= '+ id + ']').classList.add('ativo');
            })
        }
    })

    let header = document.querySelector('header');

    header.classList.toggle('bordaHeader', window.scrollY > 100);

    menuIcon.classList.remove('bx-x')
    navLista.classList.remove('active')
}

const maxHeight = document.body.scrollHeight - window.innerHeight
window.addEventListener('scroll', () =>{
    const porcentagem = (window.scrollY / maxHeight) * 100;

    indicadorScroll.style.width = `${porcentagem}%`
})

let tituloEfeito = new Typed('.titulo-perfil', {
    strings : ['Html5', 'Css3', 'Javascript'],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500
})

let estudoTituloEfeito = new Typed('.estudos-titulo-perfil', {
    strings : ['Javascript', 'React Js', 'Tailwind'],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500
})

ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 100
});

ScrollReveal().reveal('.info-perfil, .titulo', { origin: 'top' });
ScrollReveal().reveal('.resumo-profissional, .sobre-conteudo', { origin: 'right' });
ScrollReveal().reveal('.port-redes-sociais, .btn-curriculo, .sobre-img, .habilidades-conteudo, .portfolio-container, .estudos-container', { origin: 'bottom' });

const mostrarBox = () =>{
    const portfolioBox = document.querySelectorAll('.portfolio-box');
    portfolioBox.forEach(box =>{
        box.classList.replace('box-oculto', 'box-visivel')
    })
}

const esconderBox = () =>{
    const portfolioBox = document.querySelectorAll('.portfolio-box');
    portfolioBox.forEach(box =>{
        box.classList.replace('box-visivel', 'box-oculto')
    })
}

const trocarBtn = () =>{

    if (btnMostrarProjetos.className.includes('btn-visivel')) {
        btnMostrarProjetos.classList.replace('btn-visivel', 'btn-oculto')
        btnEsconderProjetos.classList.replace('btn-oculto', 'btn-visivel')
    } 
    else if(btnEsconderProjetos.className.includes('btn-visivel')){
        btnEsconderProjetos.classList.replace('btn-visivel', 'btn-oculto')
        btnMostrarProjetos.classList.replace('btn-oculto', 'btn-visivel')
    }
}

btnMostrarProjetos.addEventListener('click', () =>{
    trocarBtn()
    mostrarBox()
})

btnEsconderProjetos.addEventListener('click', () =>{
    esconderBox()
    trocarBtn()
})

menuIcon.addEventListener('click', () =>{
    menuIcon.classList.toggle('bx-x')
    navLista.classList.toggle('active')
})
