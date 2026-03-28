/* =========================
   NEWS LOADER
========================= */

document.addEventListener("DOMContentLoaded", () => {
    loadNews();
});


/* =========================
   LOAD NEWS FROM DATA
========================= */

function loadNews() {
    const container = document.getElementById("news-section");

    if (!container) return;

    fetch("data/news.json")
        .then(response => response.json())
        .then(newsList => {
            container.innerHTML = "";

            newsList.forEach(news => {
                const newsCard = document.createElement("div");
                newsCard.classList.add("news-card", "slide-up");

                newsCard.innerHTML = `
                    <img src="${news.image}" alt="${news.title}">
                    <div class="news-content">
                        <h4>${news.title}</h4>
                        <p>${news.summary}</p>
                        <a href="${news.url}" target="_blank">Read More</a>
                    </div>
                `;

                container.appendChild(newsCard);
            });

            // Trigger animations
            triggerAnimations();
        })
        .catch(error => console.error("Error loading news:", error));
}


/* =========================
   ANIMATION HELPER
========================= */

function triggerAnimations() {
    const animatedElements = document.querySelectorAll(".slide-up");

    animatedElements.forEach(el => {
        el.classList.add("animate");
    });
}