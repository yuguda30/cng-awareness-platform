/* =========================
   HELPER FUNCTIONS
========================= */

/* =========================
   FORMAT NUMBERS AS NAIRA
========================= */
function formatNaira(amount) {
    return "₦" + amount.toLocaleString("en-NG", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}

/* =========================
   DOM SELECTOR SHORTCUTS
========================= */
function $(selector) {
    return document.querySelector(selector);
}

function $all(selector) {
    return document.querySelectorAll(selector);
}

/* =========================
   CREATE ELEMENT WITH CLASSES
========================= */
function createEl(tag, classes = []) {
    const el = document.createElement(tag);
    if (classes.length) el.classList.add(...classes);
    return el;
}

/* =========================
   SCROLL TO ELEMENT
========================= */
function scrollToEl(selector) {
    const el = $(selector);
    if (el) el.scrollIntoView({ behavior: "smooth" });
}

/* =========================
   SHOW / HIDE ELEMENT
========================= */
function toggleVisibility(selector, show = true) {
    const el = $(selector);
    if (!el) return;
    el.style.display = show ? "block" : "none";
}