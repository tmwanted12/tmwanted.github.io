document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - (document.querySelector('header').offsetHeight), 
                    behavior: 'smooth'
                });
            }
        });
    });

  
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.2 
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        sectionObserver.observe(section);
    });


    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;

            if (name && email && message) {
                alert('¡Mensaje enviado con éxito! (En un entorno real, esto se enviaría a un servidor)');
                this.reset(); 
            } else {
                alert('Por favor, completa todos los campos.');
            }
        });
    }
});