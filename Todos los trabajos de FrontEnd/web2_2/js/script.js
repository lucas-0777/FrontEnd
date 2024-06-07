function convertir(){
    moneda1 = document.getElementById("moneda-1").value;
    moneda2 = document.getElementById("moneda-2").value;
    cantidad = document.getElementById("monto").value;
    visor = document.getElementById("resultado")
    resultado = 0;
    if(moneda1 == "usd" && moneda2 == "gs"){
        resultado = cantidad * 7400; //venta dólar por cantidad.
    }else if(moneda1 == "rbr" && moneda2 == "gs"){
        resultado = cantidad * 1400;
    }else if(moneda1 == "par" && moneda2 == "gs"){
        resultado = cantidad * 7;
    }else{
        resultado = 0;
    }
    visor.innerHTML = resultado;
}
document.querySelector("#btn-convertir").addEventListener("click", convertir)