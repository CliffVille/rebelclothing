document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burgermenu');
    const nav = document.querySelector('nav');
    burger.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!nav.contains(event.target) && !burger.contains(event.target)) {
            nav.classList.remove('show');
        }
    });
});