let edad = Number (prompt("¿Qué edad tienes"));
if(edad <= 17){
    document.writeln(" Eres menor de edad, no puedes entrar a la disco.");
} else{
    document.writeln( " Eres mayor de edad, puedes pasar a la disco.");
}

let color = prompt("Elige un color, el primero que se te venga a la mente.");
if(color === "azul"){
    document.writeln(" El azul es como el color del cielo.");
} else if(color === "rojo"){
    document.writeln(" El rojo es como tomate.");
} else if(color === "verde"){
    document.writeln(" El verde es como un pepino");
} else if(color === "amarillo"){
    document.writeln(" El amarillo es como el sol.")
} else if(color === "violeta"){
    document.writeln(" El violeta es el color del futuro.")
}else{
    alert("Error: No has escogido un color dentro del parámetro.")
}

let lampara = prompt("¿La lámpara esta enchufada? si/no");
let foco
if (lampara === ("si")){
    foco = prompt("¿Revisaste si el foco esta roto?");{
        if(foco === ("si")){
            document.writeln ("Compra un foco nuevo")
        }
    }
}
else{
    document.writeln("Enchufa la lámpara")
}
