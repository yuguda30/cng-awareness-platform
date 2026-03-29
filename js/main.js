function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
}
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.menu').classList.remove('active');
    });
});
/* =========================
   MAIN APPLICATION ENTRY
========================= */

document.addEventListener("DOMContentLoaded", () => {
    loadComponents();
    initAnimations();
});


/* =========================
   LOAD REUSABLE COMPONENTS
========================= */

function loadComponents() {
    loadHTML("components/navbar.html", "navbar-container");
    loadHTML("components/footer.html", "footer-container");
}

function loadHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error("Error loading component:", error));
}


/* =========================
   ANIMATION INITIALIZATION
========================= */

function initAnimations() {
    const animatedElements = document.querySelectorAll(
        ".fade-in, .slide-up, .slide-left, .slide-right, .scale-in"
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target); // run once
            }
        });
    }, {
        threshold: 0.2
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });
}


/* =========================
   GLOBAL UTILITIES
========================= */

// Scroll to section smoothly (for buttons)
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}