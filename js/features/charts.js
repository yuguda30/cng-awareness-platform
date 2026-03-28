/* =========================
   CHARTS INITIALIZATION
========================= */

document.addEventListener("DOMContentLoaded", () => {
    initCharts();
});


/* =========================
   INIT ALL CHARTS
========================= */

function initCharts() {
    if (typeof Chart === "undefined") return;

    renderFuelComparisonChart();
    renderEmissionsChart();
}


/* =========================
   FUEL COST COMPARISON
========================= */

function renderFuelComparisonChart() {
    const ctx = document.getElementById("fuelChart");

    if (!ctx) return;

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Petrol", "CNG"],
            datasets: [{
                label: "Monthly Cost (₦)",
                data: [120000, 50000], // Example values
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return "₦" + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}


/* =========================
   EMISSIONS COMPARISON
========================= */

function renderEmissionsChart() {
    const ctx = document.getElementById("emissionsChart");

    if (!ctx) return;

    new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: ["Petrol Emissions", "CNG Emissions"],
            datasets: [{
                label: "CO₂ Emissions",
                data: [100, 60], // Example ratio
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "bottom"
                }
            }
        }
    });
}