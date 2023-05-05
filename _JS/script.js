
// elementos da data
const buttomCta = document.getElementById("ver-zodiaco");
const day = document.getElementById("dia-input");
const month = document.getElementById("mes-input");
const year = document.getElementById("ano-input");
const errorData = document.getElementById("error-data");

// validação do botão de data
function gerarSigno(){

    //validando dias validos ---
    if(day.value > 31 || month.value >12){
        errorData.style.opacity = 1;
        localStorage.removeItem("nSigno")

    }
    else if ((day.value > 30 && // validar meses com apenas 30 dias
                (month.value == 4 || month.value == 6 || month.value == 9 || month.value == 11))){ 

        errorData.style.opacity = 1;
        errorData.innerText = "Data invalida o mes " + month.value + " não possuí mais que 30 dias"
        localStorage.removeItem("nSigno") // garantir que qualquer erro zere o numero do signo

    }
    else if (day.value > 29 && month.value == 2){ //validar fevereiro com mais de 29 dias
        errorData.style.opacity = 1;
        errorData.innerText = "Data invalida, Fevereiro não tem mais que 29 dias"
        localStorage.removeItem("nSigno")

    }
    else if(day.value > 28 && month.value == 2 && year.value%4 != 0){ // validar ano bissexto
        errorData.style.opacity = 1;
        errorData.innerText = "Data invalida, o ano de "+ year.value +" não é bissexto logo fevereiro possúi apenas 28 dias"
        localStorage.removeItem("nSigno")
    }
    else{
        
        if((day.value >= 21 && month.value == 1) || (day.value <= 19 && month.value == 2)){ // aquario
            // salvamento cache
            localStorage.setItem("nSigno", 0);  
        } 
        else if((day.value >= 20 && month.value == 2) || (day.value <= 20 && month.value == 3)){// peixes
            // salvamento cache
            localStorage.setItem("nSigno", 1);
        }
        else if((day.value >= 21 && month.value == 3) || (day.value <= 20 && month.value == 4)){// Aries
            // salvamento cache
            localStorage.setItem("nSigno", 2);
        }
        else if((day.value >= 21 && month.value == 4) || (day.value <= 20 && month.value == 5)){// touro
            // salvamento cache
            localStorage.setItem("nSigno", 3);
        }
        else if((day.value >= 21 && month.value == 5) || (day.value <= 20 && month.value == 6)){// gemeos
            // salvamento cache
            localStorage.setItem("nSigno", 4);
        }
        else if((day.value >= 21 && month.value == 6) || (day.value <= 21 && month.value == 7)){// cancer
            // salvamento cache
            localStorage.setItem("nSigno", 5);
        }
        else if((day.value >= 22 && month.value == 7) || (day.value <= 22 && month.value == 8)){// leao
            // salvamento cache
            localStorage.setItem("nSigno", 6);
        }
        else if((day.value >= 23 && month.value == 8) || (day.value <= 22 && month.value == 9)){// virgem
            // salvamento cache
            localStorage.setItem("nSigno", 7);
        }
        else if((day.value >= 23 && month.value == 9) || (day.value <= 22 && month.value == 10)){// libra
            // salvamento cache
            localStorage.setItem("nSigno", 8);
        }
        else if((day.value >= 23 && month.value == 10) || (day.value <= 21 && month.value == 11)){// escorpiao
            // salvamento cache
            localStorage.setItem("nSigno", 9);
        }
        else if((day.value >= 22 && month.value == 11) || (day.value <= 21 && month.value == 12)){// sagitario
            // salvamento cache
            localStorage.setItem("nSigno", 10);
        }
        else if((day.value >= 22 && month.value == 12) || (day.value <= 20 && month.value == 1)){// capricornio
            // salvamento cache
            localStorage.setItem("nSigno", 11);
        }
        

        location.href = "zodiac.html" // enviar o usuário para a tela do zodiaco
    }
}



