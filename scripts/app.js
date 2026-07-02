const screens=document.querySelectorAll(".screen");

function showScreen(id){

    screens.forEach(screen=>screen.classList.remove("active"));

    document.getElementById(id).classList.add("active");

}

document
.getElementById("startBtn")
.addEventListener("click",()=>{

    showScreen("screen-language");

});

document
.querySelectorAll(".lang-btn")
.forEach(btn=>{

    btn.addEventListener("click",()=>{

        const lang=btn.dataset.lang;

        if(lang==="pt"){

            document.getElementById("noticeTitle").innerHTML="Bem-vindo";

            document.getElementById("noticeText").innerHTML="Este protótipo interativo simula a experiência de pós-venda através do aplicativo da Solar Eco Solutions.";

            document.getElementById("agreeLabel").innerHTML="Entendo que este é um protótipo conceitual.";

            document.getElementById("continueBtn").innerHTML="Continuar";

            document.getElementById("profileTitle").innerHTML="Escolha um perfil";

            document.getElementById("oliviaType").innerHTML="Cliente Residencial";

            document.getElementById("leoType").innerHTML="Cliente Comercial";

        }

        showScreen("screen-notice");

    });

});

const agree=document.getElementById("agree");

agree.addEventListener("change",()=>{

    document.getElementById("continueBtn").disabled=!agree.checked;

});

document
.getElementById("continueBtn")
.addEventListener("click",()=>{

    showScreen("screen-profile");

});

document
.querySelectorAll(".profile-btn")
.forEach(btn=>{

    btn.addEventListener("click",()=>{

        window.location.href="pages/dashboard.html";

    });

});
