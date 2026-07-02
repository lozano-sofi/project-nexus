/* ==========================================
   PROJECT NEXUS
   DASHBOARD
========================================== */

const settingsButton = document.getElementById("settingsButton");
const controls = document.getElementById("experienceControls");
const closeButton = document.getElementById("closeControls");
const applyButton = document.getElementById("applyChanges");

const profileSelect = document.getElementById("profileSelect");
const journeySelect = document.getElementById("journeySelect");
const languageSelect = document.getElementById("languageSelect");

/* ==========================================
   EXPERIENCE STATE
========================================== */

const experience = {

    customer: "olivia",

    journey: "Year 5",

    language: "English"

};

/* ==========================================
   DATABASE
========================================== */

const database = {

    olivia: {

        production: "18.4 kWh",

        savings: "US$ 12,486",

        impact: "18.7 tons",

        recommendationTitle: "Annual Maintenance",

        recommendationText:
            "Schedule your annual maintenance to keep your solar system operating at peak efficiency.",

        journey: "Year 5"

    },

    leonardo: {

        production: "24.9 kWh",

        savings: "US$ 17,890",

        impact: "25.1 tons",

        recommendationTitle: "Referral Reward",

        recommendationText:
            "Invite a friend and receive bonus energy credits through our rewards program.",

        journey: "Year 10"

    }

};

/* ==========================================
   OPEN / CLOSE PANEL
========================================== */

settingsButton.addEventListener("click", () => {

    controls.classList.add("open");

});

closeButton.addEventListener("click", () => {

    controls.classList.remove("open");

});

/* ==========================================
   APPLY EXPERIENCE
========================================== */

applyButton.addEventListener("click", () => {

    experience.customer = profileSelect.value;

    experience.journey = journeySelect.value;

    experience.language = languageSelect.value;

    updateDashboard();

    controls.classList.remove("open");

});

/* ==========================================
   UPDATE DASHBOARD
========================================== */

function updateDashboard(){

    const customer = database[experience.customer];

    document.getElementById("production").textContent =
        customer.production;

    document.getElementById("savings").textContent =
        customer.savings;

    document.getElementById("impact").textContent =
        customer.impact;

    document.getElementById("recommendationTitle").textContent =
        customer.recommendationTitle;

    document.getElementById("recommendationText").textContent =
        customer.recommendationText;

    document.getElementById("journey").textContent =
        experience.journey;

    /* ==========================
       Language
    ========================== */

    if (experience.language === "Português") {

        document.querySelector(".header h1").textContent =
            "Boa tarde.";

        document.querySelector(".header p").textContent =
            "Tudo está funcionando perfeitamente.";

        document.querySelectorAll(".metric-title")[0].textContent =
            "Produção de Hoje";

        document.querySelectorAll(".metric-title")[1].textContent =
            "Economia Total";

        document.querySelectorAll(".metric-title")[2].textContent =
            "Impacto Ambiental";

        document.querySelectorAll(".metric-title")[3].textContent =
            "Recomendado para Você";

        document.querySelectorAll(".metric-title")[4].textContent =
            "Sua Jornada Solar";

        document.querySelector(".secondary-button").textContent =
            "Agendar Agora";

        document.querySelector(".timeline-button").textContent =
            "Ver Jornada";

        document.querySelector(".apply-button").textContent =
            "Aplicar Alterações";

    } else {

        document.querySelector(".header h1").textContent =
            "Good afternoon.";

        document.querySelector(".header p").textContent =
            "Everything is running smoothly.";

        document.querySelectorAll(".metric-title")[0].textContent =
            "Today's Production";

        document.querySelectorAll(".metric-title")[1].textContent =
            "Total Savings";

        document.querySelectorAll(".metric-title")[2].textContent =
            "Environmental Impact";

        document.querySelectorAll(".metric-title")[3].textContent =
            "Recommended for You";

        document.querySelectorAll(".metric-title")[4].textContent =
            "Your Solar Journey";

        document.querySelector(".secondary-button").textContent =
            "Schedule Now";

        document.querySelector(".timeline-button").textContent =
            "View Timeline";

        document.querySelector(".apply-button").textContent =
            "Apply Changes";

    }

    animateCards();

}

/* ==========================================
   CARD ANIMATION
========================================== */

function animateCards() {

    const cards = document.querySelectorAll(
        ".metric-card, .recommendation-card, .journey-card"
    );

    cards.forEach((card) => {

        card.style.opacity = "0";

        card.style.transform = "translateY(20px)";

    });

    cards.forEach((card, index) => {

        setTimeout(() => {

            card.style.transition = ".35s ease";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }, index * 90);

    });

}

/* ==========================================
   INITIALIZE
========================================== */

window.onload = () => {

    updateDashboard();

};
