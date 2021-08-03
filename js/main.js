const showMenu = (toggleID, navId) => {
    const toggle = document.querySelector(toggleID);
    const nav = document.querySelector(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}

showMenu('#menu-toggle', '#nav-menu');