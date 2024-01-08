document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggle');
    var menu = document.getElementById('menu');

    toggleButton.addEventListener('click', function() {
        menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
    });
});