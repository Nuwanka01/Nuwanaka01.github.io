/*icon navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/*scroll active link*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header a.navbar');

window.onscroll = () => {
    let scrollPosition = window.scrollY;
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (scrollPosition >= offset && scrollPosition < offset + height) {
            navlinks.forEach((link) => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });

    /*sticky nav bar*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', scrollPosition > 100);

    /*remove toggle icon on navbar*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*scroll reveal*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*typed js*/
document.addEventListener('DOMContentLoaded', function(){
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Web Designer',],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
});
