// variables son contenedores que guardan un valor
// y ese valor puede cambiar
// y ese valor tiene un tipo: string, number, boolean, etc
// aunque en JS el tipo es DINAMICO (puede cambiar)

let nombre = "josefa"; // tipo string (alfanumerico)

let edad = 45;  // tipo number

let casada = true; // tipo booleano (verdadero o falso)

let suma1 = 5 + 5;  // esto da 10  -- tipo number

let suma2 = "5" + "5"; // esto da 55  -- tipo string

let suma3 = "5" + 5; // esto da 55 => string + number se convierte en string

// mostrar en pantalla por document.write()
document.writeln("<h3>" + nombre + " tiene " + edad + " años, y realiza tres sumas con el 5: </h3>");

document.writeln("suma 1 (dos números) da: " + suma1 + "<br>");
document.writeln("suma 2 (dos strings) da: " + suma2 + "<br>");
document.writeln("suma 3 (un string y un número) da: " + suma3 + "<br>");

//mostrar por consola (para programador)
console.log(nombre + " tiene " + edad + " años, y realiza tres sumas con el 5:");

console.log("suma 1 (dos números) da: " + suma1 );
console.log("suma 2 (dos strings) da: " + suma2 );
console.log("suma 3 (un string y un número) da: " + suma3  );

// mostrar cuadro de alerta
// alert(nombre + " tiene " + edad + " años, y realiza tres sumas con el 5:");

//nombre = prompt("introduce el nombre:"); // prompt siempre lee strings
//edad = parseInt(prompt("introduce su edad:")); //convertir el string a number entero

document.writeln("<h3>" + nombre + " tiene " + edad + " años, y realiza tres sumas con el 5: </h3>");

let hobby; //declarar variable y la inicializas luego

hobby = "cazar ranas"; // inicializar la variable (darle un valor inicial)

/*
// restar dos números
let num1 = parseInt(prompt("introduce el primer número"));
let num2 = parseInt(prompt("introduce el segundo número"));



// CONDICIONALES : if/else

if(num1<num2){
    document.write("<h4>EL SEGUNDO NUMERO DEBE SER MENOR QUE EL PRIMERO!</h4>");
    let equivocado = true; //si se declara dentro { }solo existe dentro
    console.log("equivocado es: " + equivocado);
    console.log("el numero 1 es: " + num1);
}else{
    document.writeln("la resta de ambos números es: " + (num1-num2));
}

*/

document.writeln("<br><br>");
// console.log("equivocado es: " + equivocado);// ya no existe

// ejemplo condicionales:
// para comprar otros productos, primero has de comprar el starter pack. 
/*
if (tienes starter pack){
    puedes comprar otros productos
} else {
    debes comprar el starter pack
}*/

let preguntaCliente = prompt("tienes el starter pack? (s/n)").toLowerCase();

//preguntaCliente = preguntaCliente.toLowerCase(); // pasar a minuscula
// toUpperCase  => pasar a mayúscula

if(preguntaCliente === "s"){
    document.writeln("a compraaaar!!!");
} else if(preguntaCliente === "n"){
    document.writeln("<h4>debes comprar primero el starter pack</h4>")
} else if(preguntaCliente === "cupon"){
    document.writeln("felicidades, obtienes un 15% de descuento!");
} else{
    document.writeln("<h4>debes responder 's' o 'n'</h4>");
}

/* operadores de comparación:
> mayor que
< menor que
== igual que
=== igual que (incluye que el tipo sea el mismo)
>=  mayor o igual que
<= menor o igual que
*/
document.writeln("<br>");
let numero = parseInt(prompt("dime un numero del 1 al 10"));

if( numero <= 5){
    document.writeln("tu numero es menor o igual a 5");
}  else{
    document.writeln("tu numero es mayor que 5");
}



//1

let edad = parseInt(prompt("Qué edad tienes?"));

if (edad > 18) {
    document.writeln("Puedes entrar a la discoteca.");
} else if (edad < 18) {
    document.writeln("No puedes entrar a la discoteca.");
} else {
    document.writeln("Tienes 18 años, puedes entrar a la discoteca.");
}

let color = prompt("Elige un color (azul, verde, rojo, amarillo, violeta)").toLowerCase();



//2

switch (color) {
    case "azul":
        document.writeln("El azul es como el mar, siempre que el cielo sea azul (y sea de día).");
        break;
    case "verde":
        document.writeln("El verde es el color de la naturaleza.");
        break;
    case "rojo":
        document.writeln("El rojo es el color del fuego y la pasión.");
        break;
    case "amarillo":
        document.writeln("El amarillo es el color del sol.");
        break;
    case "violeta":
        document.writeln("El violeta es un color místico y espiritual.");
        break;
    default:
        document.writeln("No has elegido un color válido.");
}



//3

document.writeln("<br>");
let enchufada = prompt("¿Está la lámpara enchufada? (si/no)").toLowerCase();

if (enchufada === "si") {
    let bombilla = prompt("¿Está la bombilla fundida? (si/no)").toLowerCase();
    if (bombilla === "si") {
        document.writeln("Cambia la bombilla.");
    } else {
        document.writeln("Revisa el interruptor.");
    }
} else {
    document.writeln("Enchufa la lámpara.");
}