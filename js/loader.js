/* ==========================================
   PROJECT NEXUS
   LOADER
========================================== */

const Loader = (() => {

    let element = null;

    let visible = false;

    /* ==========================================
       ELEMENT
    ========================================== */

    function getElement() {

        if (!element) {

            element = document.getElementById(
                "experienceLoader"
            );

        }

        return element;

    }

    /* ==========================================
       SHOW
    ========================================== */

    function show() {

        const loader = getElement();

        if (!loader) {

            return;

        }

        loader.classList.remove(
            "hidden"
        );

        visible = true;

    }

    /* ==========================================
       HIDE
    ========================================== */

    function hide() {

        const loader = getElement();

        if (!loader) {

            return;

        }

        loader.classList.add(
            "hidden"
        );

        visible = false;

    }

    /* ==========================================
       TOGGLE
    ========================================== */

    function toggle(force) {

        if (

            typeof force ===

            "boolean"

        ) {

            force

                ? show()

                : hide();

            return;

        }

        visible

            ? hide()

            : show();

    }

    /* ==========================================
       STATUS
    ========================================== */

    function isVisible() {

        return visible;

    }

    /* ==========================================
       INITIALIZE
    ========================================== */

    function initialize() {

        getElement();

        hide();

    }

    /* ==========================================
       PUBLIC API
    ========================================== */

    return {

        initialize,

        show,

        hide,

        toggle,

        isVisible

    };

})();
