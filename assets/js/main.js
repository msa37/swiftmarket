document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = '#ffffff';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
                navLinks.style.zIndex = '1000';
            }
        });
    }

    // Smooth Scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submission Handling (WhatsApp Integration)
    const orderForm = document.getElementById('swiftOrderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const name = document.getElementById('name').value;
            const neighborhood = document.getElementById('neighborhood').value;
            const frequency = document.getElementById('frequency').value;
            const products = document.getElementById('products').value;
            
            // Create WhatsApp message
            const message = `Bonjour SwiftMarket!%0A%0A*Nouvelle Commande*%0A*Nom:* ${name}%0A*Quartier:* ${neighborhood}%0A*Fréquence:* ${frequency}%0A*Liste des produits:*%0A${products}%0A%0AMerci de me confirmer la réception!`;
            
            // WhatsApp Business Number
            const phoneNumber = "22893392515";
            
            // Open WhatsApp with the message
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
            
            // Optional: Show success message or reset form
            alert("Merci ! Votre commande a été préparée. Vous allez être redirigé vers WhatsApp pour l'envoyer.");
            orderForm.reset();
        });
    }

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '5px 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.padding = '10px 0';
            header.style.backgroundColor = '#ffffff';
        }
    });
});
