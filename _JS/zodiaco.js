const signoImg = document.getElementById("signo-img");
const seuSigno = document.getElementById("signo-titulo");

// seleção dos signos
if(localStorage.getItem("nSigno") == 0){
    signoImg.src = "Assets/aquarius.png";
    seuSigno.innerText = "Seu signo é Aquario";

} 
else if(localStorage.getItem("nSigno") == 1){
    signoImg.src = "Assets/pisces.png";
    seuSigno.innerText = "Seu signo é Peixes";

} 
else if(localStorage.getItem("nSigno") == 2){
    signoImg.src = "Assets/aries.png";
    seuSigno.innerText = "Seu signo é Ares";

} 
else if(localStorage.getItem("nSigno") == 3){
    signoImg.src = "Assets/taurus.png";
    seuSigno.innerText = "Seu signo é Touro";

} 
else if(localStorage.getItem("nSigno") == 4){
    signoImg.src = "Assets/gemini.png";
    seuSigno.innerText = "Seu signo é Gemeos";
    
}
else if(localStorage.getItem("nSigno") == 5){
    signoImg.src = "Assets/cancer.png";
    seuSigno.innerText = "Seu signo é Câncer";
    
}

else if(localStorage.getItem("nSigno") == 6){
    signoImg.src = "Assets/leo.png";
    seuSigno.innerText = "Seu signo é Leão";
    
}
else if(localStorage.getItem("nSigno") == 7){
    signoImg.src = "Assets/virgo.png";
    seuSigno.innerText = "Seu signo é Virgem";
    
}
else if(localStorage.getItem("nSigno") == 8){
    signoImg.src = "Assets/libra.png";
    seuSigno.innerText = "Seu signo é Libra";
    
}
else if(localStorage.getItem("nSigno") == 9){
    signoImg.src = "Assets/scorpio.png";
    seuSigno.innerText = "Seu signo é Escorpião";
    
}
else if(localStorage.getItem("nSigno") == 10){
    signoImg.src = "Assets/sagi.png";
    seuSigno.innerText = "Seu signo é Sagitário";
    
}
else if(localStorage.getItem("nSigno") == 11){
    signoImg.src = "Assets/capricorn.png";
    seuSigno.innerText = "Seu signo é Capricórnio";
    
}


function returnHome(){
    location.href = "index.html";
    localStorage.removeItem("nSigno") // garantir que ao retornar a pagina o numero do signo sera zerado
}


