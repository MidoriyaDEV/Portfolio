// Seleciona todos os links da navbar
const navLinks = document.querySelectorAll('#nav_list a');

// Função para alternar seções
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Oculta todas as seções
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        
        // Exibe a seção correspondente
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.style.display = 'block';
    });
});
