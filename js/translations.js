/* ==========================================
   PROJECT NEXUS
   TRANSLATIONS
========================================== */

function getCurrentLanguage() {

    return Storage.get("language") || "en";

}

function setCurrentLanguage(language) {

    Storage.set("language", language);

}

function getTranslation(path) {

    const language = getCurrentLanguage();

    const dictionary = Database.translations[language];

    if (!dictionary) {

        return "";

    }

    return path

        .split(".")

        .reduce(

            (object, key) =>

                object ? object[key] : null,

            dictionary

        );

}

/* ==========================================
   APPLY TRANSLATIONS
========================================== */

function translatePage() {

    const elements = document.querySelectorAll(

        "[data-i18n]"

    );

    elements.forEach(element => {

        const key = element.dataset.i18n;

        const text = getTranslation(key);

        if (!text) {

            return;

        }

        element.textContent = text;

    });

}

/* ==========================================
   LANGUAGE SELECT
========================================== */

function synchronizeLanguageSelector() {

    const selector = document.getElementById(

        "languageSelector"

    );

    if (!selector) {

        return;

    }

    selector.value = getCurrentLanguage();

    selector.addEventListener(

        "change",

        event => {

            setCurrentLanguage(

                event.target.value

            );

            translatePage();

        }

    );

}

/* ==========================================
   DOCUMENT
========================================== */

function updateDocumentLanguage() {

    document.documentElement.lang =

        getCurrentLanguage();

}

/* ==========================================
   TITLE
========================================== */

function updateDocumentTitle() {

    document.title =

        "Project Nexus";

}

/* ==========================================
   PUBLIC API
========================================== */

function refreshTranslations() {

    updateDocumentLanguage();

    updateDocumentTitle();

    translatePage();

}

/* ==========================================
   INITIALIZATION
========================================== */

function initializeTranslations() {

    if (

        !Database.translations ||

        Object.keys(

            Database.translations

        ).length === 0

    ) {

        return;

    }

    synchronizeLanguageSelector();

    refreshTranslations();

}
