document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burger-menu');
    const sidebar = document.getElementById('sidebar');
    const darkModeButton = document.getElementById('dark-mode');
    const lightModeButton = document.getElementById('light-mode');
    const cards = document.querySelectorAll('.card h2');

    burgerMenu.addEventListener('click', function () {
        if (sidebar.style.left === '0px') {
            sidebar.style.left = '-250px'; // Adjust based on sidebar width
        } else {
            sidebar.style.left = '0px';
        }
    });

    // Toggle dark/light mode
    darkModeButton.addEventListener('click', function () {
        document.body.classList.add('dark-mode');
    });

    lightModeButton.addEventListener('click', function () {
        document.body.classList.remove('dark-mode');
    });

    // Toggle dropdowns for cards
    cards.forEach(card => {
        card.addEventListener('click', function () {
            const dropdown = this.nextElementSibling;
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            } else {
                dropdown.style.display = 'block';
            }
        });
    });
});
