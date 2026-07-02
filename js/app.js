/* ==========================================
   PROJECT NEXUS
   APPLICATION
========================================== */

document.addEventListener(

    "DOMContentLoaded",

    async () => {

        initializeStorage();

        const page =

            window.location.pathname

                .split("/")

                .pop();

        switch (page) {

            case "language.html":

                initializeLanguageSelection();

                break;

            case "terms.html":

                initializeTerms();

                break;

            case "experience.html":

                try {

                    await initializeDatabase();

                    if (

                        typeof Loader !==

                        "undefined"

                    ) {

                        Loader.initialize();

                    }

                    if (

                        typeof initializeTranslations ===

                        "function"

                    ) {

                        initializeTranslations();

                    }

                    if (

                        typeof Experience !==

                        "undefined"

                    ) {

                        Experience.initialize();

                    }

                    if (

                        typeof Controls !==

                        "undefined"

                    ) {

                        Controls.initialize();

                    }

                }

                catch (error) {

                    console.error(

                        "Project Nexus initialization error:",

                        error

                    );

                }

                break;

        }

    }

);

/* ==========================================
   LANGUAGE
========================================== */

function initializeLanguageSelection() {

    const buttons =

        document.querySelectorAll(

            "[data-language]"

        );

    if (!buttons.length) {

        return;

    }

    buttons.forEach(button => {

        button.addEventListener(

            "click",

            () => {

                Storage.set(

                    "language",

                    button.dataset.language

                );

                window.location.href =

                    "terms.html";

            }

        );

    });

}

/* ==========================================
   TERMS
========================================== */

function initializeTerms() {

    const checkbox =

        document.getElementById(

            "agreeTerms"

        );

    const button =

        document.getElementById(

            "continueButton"

        );

    if (

        !checkbox ||

        !button

    ) {

        return;

    }

    checkbox.addEventListener(

        "change",

        () => {

            button.disabled =

                !checkbox.checked;

        }

    );

    button.addEventListener(

        "click",

        () => {

            window.location.href =

                "experience.html";

        }

    );

                       }
