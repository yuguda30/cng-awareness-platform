/* =========================
   NAVIGATION SCRIPT
========================= */

document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
});


/* =========================
   MOBILE MENU TOGGLE
========================= */

function initMobileMenu() {
    const navContainer = document.getElementById("navbar-container");

    // Wait until navbar is loaded dynamically
    const observer = new MutationObserver(() => {
        const menuBtn = document.getElementById("menu-toggle");
        const navMenu = document.getElementById("nav-menu");

        if (menuBtn && navMenu) {
            menuBtn.addEventListener("click", () => {
                navMenu.classList.toggle("active");
            });

            observer.disconnect(); // stop observing once done
        }
    });

    observer.observe(navContainer, { childList: true });
}


/* =========================
   ACTIVE LINK HIGHLIGHT
========================= */

window.addEventListener("load", () => {
    const links = document.querySelectorAll("#nav-menu a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        const href = link.getAttribute("href");

        if (href === currentPage) {
            link.classList.add("active");
        }
    });
});