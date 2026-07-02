/* ==========================================
   PROJECT NEXUS
   APPLICATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeStorage();

    initializeLanguageSelection();

    initializeTerms();

});

/* ==========================================
   LANGUAGE
========================================== */

function initializeLanguageSelection(){

    const buttons=document.querySelectorAll("[data-language]");

    if(!buttons.length) return;

    buttons.forEach(button=>{

        button.addEventListener("click",()=>{

            Storage.set("language",button.dataset.language);

            window.location.href="terms.html";

        });

    });

}

/* ==========================================
   TERMS
========================================== */

function initializeTerms(){

    const checkbox=document.getElementById("agreeTerms");

    const button=document.getElementById("continueButton");

    if(!checkbox || !button) return;

    checkbox.addEventListener("change",()=>{

        button.disabled=!checkbox.checked;

    });

    button.addEventListener("click",()=>{

        window.location.href="experience.html";

    });

}
