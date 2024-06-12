document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');

    menuToggle.addEventListener('click', function () {
        if (sideMenu.style.width === '250px') {
            sideMenu.style.width = '0';
        } else {
            sideMenu.style.width = '250px';
        }
    });
});