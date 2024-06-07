document.getElementById("btn-ingresar").disabled = true;

function validar(){
    correo = document.getElementById("correo");
    contraseña = document.getElementById("contraseña");
    if(correo.value.length != "" && contraseña.value != ""){
        document.getElementById("btn-ingresar").disabled = false;
    }else{
        document.getElementById("btn-ingresar").disabled = true;
    }
}