/* ==========================================
   PROJECT NEXUS
   STORAGE
========================================== */

const Storage = {

    set(key, value) {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    },

    get(key) {

        const value = localStorage.getItem(key);

        return value ? JSON.parse(value) : null;

    },

    remove(key) {

        localStorage.removeItem(key);

    },

    clear() {

        localStorage.clear();

    }

};

/* ==========================================
   DEFAULT EXPERIENCE
========================================== */

function initializeStorage() {

    if (!Storage.get("language")) {

        Storage.set("language", "en");

    }

    if (!Storage.get("customer")) {

        Storage.set("customer", 1001);

    }

    if (!Storage.get("journey")) {

        Storage.set("journey", "week-1");

    }

}

initializeStorage();
