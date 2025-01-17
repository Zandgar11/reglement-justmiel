// Sélecteurs
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Vérifie le thème sauvegardé dans le localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark');
    themeToggleButton.textContent = '☀️';
}

// Écouteur d'événement pour changer de thème
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    
    // Met à jour le texte du bouton
    if (body.classList.contains('dark')) {
        themeToggleButton.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleButton.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});
