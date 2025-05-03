// Menu hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Cambia stile dell'header allo scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoConstrainedScrollableContainer();
    });
});

// Inizializza gli eventi
document.addEventListener('DOMContentLoaded', () => {
    // Eventi fiere in Ticino
    const events = [
        {
            date: '15 Mag',
            title: 'Festa di Primavera',
            location: 'Bellinzona, Piazza del Sole'
        },
        {
            date: '28 Mag',
            title: 'Mercato del Sabato',
            location: 'Lugano, Piazza della Riforma'
        },
        {
            date: '10 Giu',
            title: 'Festival dei Sapori',
            location: 'Locarno, Piazza Grande'
        },
        {
            date: '24 Giu',
            title: 'Festa d\'Estate',
            location: 'Ascona, Lungolago'
        },
        {
            date: '15 Lug',
            title: 'Sagra del Borgo',
            location: 'Mendrisio, Centro Storico'
        }
    ];

    const eventList = document.getElementById('eventList');
    
    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');
        
        eventCard.innerHTML = `
            <div class="event-date">${event.date}</div>
            <div class="event-info">
                <h4>${event.title}</h4>
                <p>${event.location}</p>
            </div>
        `;
        
        eventList.appendChild(eventCard);
    });

    // Gestione del form di contatto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Qui andrebbe il codice per inviare il form
            alert('Grazie per il tuo messaggio! Ti contatteremo presto.');
            contactForm.reset();
        });
    }
});

// Animazioni al caricamento
window.addEventListener('load', () => {
    // Animazioni con intersectionObserver
    const observerOptions = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elementi da animare al caricamento
    document.querySelectorAll('.section-header, .about-content, .menu-item, .event-card').forEach(el => {
        observer.observe(el);
    });
});

window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    // Fai scorrere l'immagine a una velocità più lenta (0.5x) rispetto allo scroll della pagina
    if (heroBackground) {
        heroBackground.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
    }
});