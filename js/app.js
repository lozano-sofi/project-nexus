document.addEventListener("DOMContentLoaded", async () => {

    initializeStorage();

    const page = window.location.pathname.split("/").pop();

    if (page === "terms.html") {

        initializeTerms();

        return;

    }

    if (page === "experience.html") {

        try {

            await initializeDatabase();

            Loader?.initialize();

            Experience?.initialize();

            Controls?.initialize();

        }

        catch (error) {

            console.error(error);

        }

    }

});

function initializeTerms() {

    const checkbox = document.getElementById("agreeTerms");
    const button = document.getElementById("continueButton");

    if (!checkbox || !button) return;

    checkbox.addEventListener("change", () => {
        button.disabled = !checkbox.checked;
    });

    button.addEventListener("click", () => {
        window.location.href = "experience.html";
    });

}
