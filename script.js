document.addEventListener('DOMContentLoaded', () => {


    // ================== Sticky Header Logic ==================
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // ================== Mobile Menu Toggle ==================
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuBtn.classList.toggle('fa-xmark'); 
            menuBtn.classList.toggle('fa-bars');
        });
    }

    // ================== Close Menu on Link Click (Mobile) ==================
    // This is still useful in case the user re-opens the menu and clicks 'Home'
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                menuBtn.classList.remove('fa-xmark');
                menuBtn.classList.add('fa-bars');
            }
        });
    });

});