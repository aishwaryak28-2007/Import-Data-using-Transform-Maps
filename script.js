// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Interactive Feature Example: Button Click Handler
    const ctaButton = document.querySelector('.hero button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            console.log('Get Started button was clicked!');
            alert('Welcome! Your journey starts here.');
        });
    }

});
