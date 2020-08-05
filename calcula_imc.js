var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

       
var pacientes = document.querySelectorAll(".paciente");

        
for (var i = 0; i< pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var tdimc = paciente.querySelector(".info-imc");

    function montaTd(dado,classe){
        var Td = document.textContent("Td")
        td.textContent = dado;
        td.classList.add(classe);
        return td;
    }        
    var pesoValido = true;
    var alturaValida = true;

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (peso < 0 || peso >1000) {
        console.log("Peso Invalido");
        pesoValido = false;
        tdPeso.textContent = "Peso Invalido";
        paciente.classList.add("paciente_invalido")
    }


    if (altura < 0 || altura >3.00) {
        console.log("Altura Invalida");
        alturaValida = false;
        tdAltura.textContent = "Altura Invalida";
        paciente.classList.add("paciente_invalido")

    }

               
    if (alturaValida && pesoValido) {
        var imc =calculaImc(peso, altura) ;
        tdimc.textContent = imc;
    } 
    

    function validaPeso(peso){

        if (peso >= 0 && peso <= 1000) {
            return true;
        } else {
            return false;
        }
    }
    function validaAltura(altura) {

        if (altura >= 0 && altura <= 3) {
            return true;
        } else {
            return false;
        }
    }

    function calculaImc(peso, altura){

        var imc = 0;
        imc = peso / (altura * altura) ;
        return imc.toFixed(2);
    }


 

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }


    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
}