// Sélecteurs
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Vérifie le thème sauvegardé dans le localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark');
    themeToggleButton.textContent = '☀️';  // Affiche le soleil pour indiquer que c'est le mode sombre
}

// Écouteur d'événement pour changer de thème
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    
    // Met à jour le texte du bouton
    if (body.classList.contains('dark')) {
        themeToggleButton.textContent = '☀️';  // Affiche le soleil pour passer en mode clair
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleButton.textContent = '🌙';  // Affiche la lune pour passer en mode sombre
        localStorage.setItem('theme', 'light');
    }
});
