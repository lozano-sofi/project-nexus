/* ==========================================
   PROJECT NEXUS
   CONTROLS
========================================== */

const Controls = {

    panel: document.getElementById(
        "controlsPanel"
    ),

    settingsButton: document.getElementById(
        "settingsButton"
    ),

    closeButton: document.getElementById(
        "closeControls"
    ),

    applyButton: document.getElementById(
        "applyControls"
    ),

    customerSelector: document.getElementById(
        "customerSelector"
    ),

    journeySelector: document.getElementById(
        "journeySelector"
    ),

    languageSelector: document.getElementById(
        "languageSelector"
    )

};

/* ==========================================
   PANEL
========================================== */

function openControls() {

    if (!Controls.panel) {

        return;

    }

    Controls.panel.classList.add(
        "open"
    );

}

function closeControls() {

    if (!Controls.panel) {

        return;

    }

    Controls.panel.classList.remove(
        "open"
    );

}

/* ==========================================
   APPLY
========================================== */

function applyControls() {

    if (

        Controls.customerSelector

    ) {

        Experience.changeCustomer(

            Controls.customerSelector.value

        );

    }

    if (

        Controls.journeySelector

    ) {

        Experience.changeJourney(

            Controls.journeySelector.value

        );

    }

    if (

        Controls.languageSelector

    ) {

        setCurrentLanguage(

            Controls.languageSelector.value

        );

    }

    if (

        typeof refreshTranslations ===

        "function"

    ) {

        refreshTranslations();

    }

    closeControls();

}

/* ==========================================
   EVENTS
========================================== */

function bindControlsEvents() {

    if (

        Controls.settingsButton

    ) {

        Controls.settingsButton.addEventListener(

            "click",

            openControls

        );

    }

    if (

        Controls.closeButton

    ) {

        Controls.closeButton.addEventListener(

            "click",

            closeControls

        );

    }

    if (

        Controls.applyButton

    ) {

        Controls.applyButton.addEventListener(

            "click",

            applyControls

        );

    }

}

/* ==========================================
   INITIALIZATION
========================================== */

function initializeControls() {

    if (

        typeof Experience ===

        "undefined"

    ) {

        return;

    }

    Experience.populateSelectors();

    bindControlsEvents();

}

/* ==========================================
   PUBLIC API
========================================== */

window.Controls = {

    open: openControls,

    close: closeControls,

    apply: applyControls,

    initialize: initializeControls

};
