/* ==========================================
   PROJECT NEXUS
   APPLICATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeStorage();

    initializeLanguageSelection();

});

/* ==========================================
   LANGUAGE SELECTION
========================================== */

function initializeLanguageSelection() {

    const languageButtons = document.querySelectorAll("[data-language]");

    if (!languageButtons.length) {

        return;

    }

    languageButtons.forEach(button => {

        button.addEventListener("click", () => {

            const language = button.dataset.language;

            Storage.set("language", language);

            window.location.href = "terms.html";

        });

    });

}

/* ==========================================
   NAVIGATION
========================================== */

function navigate(page) {

    window.location.href = page;

}
