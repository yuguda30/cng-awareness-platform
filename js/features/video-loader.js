/* =========================
   VIDEO LOADER
========================= */

document.addEventListener("DOMContentLoaded", () => {
    loadVideos();
});


/* =========================
   LOAD VIDEOS FROM DATA
========================= */

function loadVideos() {
    const container = document.getElementById("video-section");

    if (!container) return;

    fetch("data/videos.json")
        .then(response => response.json())
        .then(videos => {
            container.innerHTML = "";

            videos.forEach(video => {
                const videoCard = document.createElement("div");
                videoCard.classList.add("video-card", "fade-in");

                videoCard.innerHTML = `
                    <iframe width="100%" height="200"
                        src="https://www.youtube.com/embed/${video.youtubeId}"
                        title="${video.title}"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                    <h4>${video.title}</h4>
                    <p>${video.description}</p>
                    <a href="${video.url}" target="_blank">Watch on YouTube</a>
                `;

                container.appendChild(videoCard);
            });

            // Trigger animations
            triggerAnimations();
        })
        .catch(error => console.error("Error loading videos:", error));
}


/* =========================
   ANIMATION HELPER
========================= */

function triggerAnimations() {
    const animatedElements = document.querySelectorAll(".fade-in");

    animatedElements.forEach(el => {
        el.classList.add("animate");
    });
}