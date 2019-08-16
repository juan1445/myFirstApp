
var a = 18;
var b = 25;


const datos = () => {
    let nombre = prompt("Digite su nombre")
    let edad = prompt('Digite su edad')

    for (let i = 0; i <= edad; i++) {
        if(i == edad) {
            document.write(`<h1>Mi nombre es ${nombre} y mi edad es ${i}</h1>`);
        }
    }
    if(edad >= 18){
        document.write(`<h1>Eres mayor de edad`)
    }
    else if(edad < 18){
        document.write(`<h1>Eres menor de edad`)
    }
}




const OPERACIONES = (a, b) => {
    suma = a + b;
    resta = a - b;
    multiplicacion = a * b;
    division = a / b;
}
OPERACIONES(a, b);
datos();
document.write(`<h3>Esto es una suma= ${suma}</br>Esto es una resta= ${resta}</br>Esto es una multiplicación= ${multiplicacion}</br>Esto es una división= ${division}`);

