/* =========================
   APPLICATION CONSTANTS
========================= */

/* =========================
   FUEL DEFAULT VALUES (NIGERIA)
========================= */

const FUEL_DEFAULTS = {
    petrolPrice: 650, // ₦ per litre (can change later)
    cngPrice: 250, // ₦ equivalent
    efficiency: 12 // km per litre
};


/* =========================
   CHART DEFAULT DATA
========================= */

const CHART_DATA = {
    fuelComparison: {
        petrol: 120000,
        cng: 50000
    },
    emissions: {
        petrol: 100,
        cng: 60
    }
};


/* =========================
   API / DATA PATHS
========================= */

const DATA_PATHS = {
    videos: "data/videos.json",
    news: "data/news.json",
    fuel: "data/fuel-data.json"
};


/* =========================
   UI SETTINGS
========================= */

const UI_SETTINGS = {
    animationThreshold: 0.2,
    mobileBreakpoint: 768
};


/* =========================
   APP META
========================= */

const APP_INFO = {
    name: "CNG Awareness Platform",
    version: "1.0.0",
    author: "CloudSentinel Technologies"
};