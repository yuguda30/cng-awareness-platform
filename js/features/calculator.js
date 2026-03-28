/* =========================
   CNG SAVINGS CALCULATOR
========================= */

document.addEventListener("DOMContentLoaded", () => {
    initCalculator();
});


/* =========================
   INITIALIZE CALCULATOR
========================= */

function initCalculator() {
    const form = document.getElementById("calculator-form");

    if (!form) return;

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        calculateSavings();
    });
}


/* =========================
   MAIN CALCULATION LOGIC
========================= */

function calculateSavings() {

    // Inputs
    const distance = parseFloat(document.getElementById("distance").value);
    const petrolPrice = parseFloat(document.getElementById("petrol-price").value);
    const cngPrice = parseFloat(document.getElementById("cng-price").value);
    const efficiency = parseFloat(document.getElementById("efficiency").value);

    // Validation
    if (!distance || !petrolPrice || !cngPrice || !efficiency) {
        showResult("Please fill all fields correctly.", true);
        return;
    }

    // Monthly fuel usage (litres or equivalent)
    const fuelUsed = distance / efficiency;

    // Costs
    const petrolCost = fuelUsed * petrolPrice;
    const cngCost = fuelUsed * cngPrice;

    // Savings
    const savings = petrolCost - cngCost;

    // Display
    displayResults({
        fuelUsed,
        petrolCost,
        cngCost,
        savings
    });
}


/* =========================
   DISPLAY RESULTS
========================= */

function displayResults(data) {
    const resultBox = document.getElementById("calculator-result");

    resultBox.innerHTML = `
        <h3>💰 Monthly Savings Result</h3>
        <p><strong>Fuel Used:</strong> ${data.fuelUsed.toFixed(2)} units</p>
        <p><strong>Petrol Cost:</strong> ₦${formatNumber(data.petrolCost)}</p>
        <p><strong>CNG Cost:</strong> ₦${formatNumber(data.cngCost)}</p>
        <p class="highlight">
            <strong>You Save:</strong> ₦${formatNumber(data.savings)}
        </p>
    `;

    resultBox.classList.add("show");
}


/* =========================
   ERROR / MESSAGE DISPLAY
========================= */

function showResult(message, isError = false) {
    const resultBox = document.getElementById("calculator-result");

    resultBox.innerHTML = `<p>${message}</p>`;
    resultBox.classList.add("show");

    if (isError) {
        resultBox.style.color = "red";
    }
}


/* =========================
   NUMBER FORMATTER (₦)
========================= */

function formatNumber(num) {
    return num.toLocaleString("en-NG", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}