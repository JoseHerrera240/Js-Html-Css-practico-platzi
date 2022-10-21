const menuEmai = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmai.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.remove("inactive")
}