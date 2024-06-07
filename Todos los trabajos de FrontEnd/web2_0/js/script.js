var numero1;
var numero2;
var operador;
var resultado;

function escribir(n){
    display = document.getElementById("display");
    display.value = display.value + n;
}

function operar(op){
    //si el operador es distinto a igual...
    //sino si el operador es igual a = ... calcular
    if(op != "="){
        operador = op;
        display = document.getElementById("display");
        numero1 = display.value;
        display.value = "";

    }else if(op == "="){
        display = document.getElementById("display");
        result = document.getElementById("display_resultado");
        numero2 = display.value;
        display.value = (numero1 + operador + numero2);
        result.value = eval((numero1 + operador + numero2));
    }  
}
function limpiar(){
        display = document.getElementById("display");
        display.value = "";
    }