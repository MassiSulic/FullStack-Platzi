// Estructura basica del if (si). Importante, si el if esta en false no se va a ejecutar.
//Pero si la condicion si es verdaderia entonces si se va a ejecutar

if (true) {
    console.log("Hola");
} else {
    console.log("Soy falso")
}

// else if

if (false) {
    console.log("Hola");
} else if (true) {
    console.log("Soy falso");
} else {
    console.log("Soy else");
}

// Ejercicio practico con else if

var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, sera tu primera votacion");

} 
else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} 

else {
    console.log("No puedes votar, no eres mayor de edad")
}

// Operador ternario, sintaxis del operador 

condition ? true : false;

// Ejemplo

var numero = 1;

var resultado = numero === 1 ? "Si soy un uno" : "No soy uno";
