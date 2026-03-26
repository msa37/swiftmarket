document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Change icon
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when a link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Product Filter Logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            productCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    // Simple fade in animation
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Form Submission to WhatsApp
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const district = document.getElementById('district').value;
            const products = document.getElementById('products').value;
            
            // Construct WhatsApp Message
            const whatsappNumber = '22893392515';
            const message = `Bonjour SwiftMarket!%0A%0A` +
                            `*Nouvelle Commande*%0A` +
                            `*Nom:* ${name}%0A` +
                            `*Quartier:* ${district}%0A` +
                            `*Produits:* ${products}%0A%0A` +
                            `Merci de me recontacter pour confirmer la livraison.`;
            
            // Open WhatsApp
            window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
            
            // Optional: Reset form or show success message
            orderForm.reset();
            alert('Votre demande a été préparée. Vous allez être redirigé vers WhatsApp pour l\'envoyer.');
        });
    }

    // Sticky Header Scroll Effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.padding = '15px 0';
            header.style.backgroundColor = '#ffffff';
        }
    });
});
