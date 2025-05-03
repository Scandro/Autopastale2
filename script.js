// Mobile menu toggle
const hamburger = document.querySelector("#hamburger-menu");
const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("no-scroll"); // Previene lo scroll quando il menu è aperto
});

// Chiudi il menu quando si clicca su un link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.classList.remove("no-scroll");
    });
});

// Cambia stile dell'header allo scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 80) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Effetto parallax per la hero section
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground && scrollPosition < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    }
    
    // Highlight del menu corrente in base alla sezione visibile
    const sections = document.querySelectorAll("section");
    let currentSection = "";
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
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
    
    if (eventList) {
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
    }

    // Smooth scrolling per i link di ancoraggio
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            const headerOffset = 70; // Altezza dell'header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
});

// Aggiungi classe per le animazioni al caricamento
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
