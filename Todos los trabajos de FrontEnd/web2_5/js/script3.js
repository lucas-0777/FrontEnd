var num = 1;
var suma = 0;
//crear un sumador que se detiene cuando el número ingresado es CERO
while(num !=0){            //mientras num no sea igual a 0
    num = Number(prompt("INGRESE UN NÚMERO ", "")); //se solicita el número
    suma = suma + num; // se adiciona a la variable suma
}
document.write("La suma es: "+ suma);
//ops, algo no está bien, investiga sobre
//parseInt()