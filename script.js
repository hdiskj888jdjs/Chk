// Menu toggle functionality
const menubar = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');

menubar.addEventListener('click', () => {
    menubar.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Scroll animation and sticky header
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    
    sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        
        if (scrollTop > offset && scrollTop < offset + height) {
            sec.classList.add('start-animation');
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });
    
    // Sticky header
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', scrollTop > 100);
    
    // Close the menu when scrolling
    if (navbar.classList.contains('active')) {
        menubar.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});
