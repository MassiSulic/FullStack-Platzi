/* --- VARIABLES Y OPERACIONES --- */

// Una variables es la asignacion de un espacio en memoria, y sirve para guardar valores en memoria.

var Variable = 1

/* Cuando declaro una variable solo estoy dando el nombre que va a tener, mientras que cuando la inicializo
le estoy dando el nombre y el valor que va a tener. */

// Variable declarada 👇
var Hola

// Variable inicializada 👇
var Hola = Chau

/* Sumar numero es realizar una operacion matematica gracias al lenguaje, mientras que concatenar strings
es simplemente unir dos textos */

// Sumar numeros 👇, en este caso el resultado seria 2
console.log(1 + 1)

// Concatenar strings 👇, y en este caso el resultado seria 11, porque en el anterior estoy haciendo una
// suma matematica, mientras que en este caso estoy uniendo dos textos
console.log("1" + "1")

// Para sumer o concatenar uso el mismo operador +

console.log(1 + 1, "1" + "1")

// Tipo de datos (Para saber el tipo de dato en js podemos usar "typeof()" )

var nombre = "Massimo"
console.log(typeof(nombre))
// return: String

var apellido = "Sulic"
console.log(typeof(apellido))
// return: String

var nombreDeUsuarioPlatzi = "MassiSulic"
console.log(typeof(nombreDeUsuarioPlatzi))
// return: String

var edad = 18
console.log(typeof(edad))
// return: Number

var correoElectronico = "massimo.a.sulic@gmail.com"
console.log(typeof(correoElectronico))
// return: String

var isMayorDeEdad = true
console.log(typeof(isMayorDeEdad))
// return: Boolean

var dineroAhorrado = 1000
console.log(typeof(dineroAhorrado))
// return: Number

var deudas = 100
console.log(typeof(deudas))
// return: Number

console.log(nombre, apellido)
console.log(dineroAhorrado - deudas)

/* --- FUNCIONES --- */

/* Una funcion es el proceso por el cual hay datos de entrada, un procesamiento y una salida. Basicamente
es como dar instrucciones para que lo que introduzcamos en la funcion sea procesado
y al final tengamos otro valor o el valor que deseemos */

/* Puedo usar funciones siempre que quiera en mi codigo, pero puede ser util para automatizar procesos
es decir que si tengo alguna tarea repetitiva, puedo crear una funcion y llamarla cada vez que necesite */

/* Ademas los parámetros son la lista de variables que ponemos cuando se define una función, 
por ejemplo, en la siguiente función tenemos dos parámetros “a” y “b” 👇 */

function suma(a, b) {
	return a + b;
}

/* Y los argumentos son los valores que se pasan a la función cuando ésta es invocada, de esta manera, 
en el siguiente ejemplo tendríamos que “7”, “4” son los argumentos de nuestra invocación a la función:*/

suma(7, 4);

// Ejemplo practico 👇

function nombreCompleto(name, lastName) {
    return name + ' ' + lastName
}

function saludo(name, lastname, username) {
    const completeName = nombreCompleto(name, lastname);
    
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + username + ".");
}

saludo('Massimo', 'Sulic', 'MassiSulic');

/* --- CONDICIONALES --- */

/* Las condicionales son estructuras de control para tomar desiciones
es decir que son lineas de codigo que me permiten validar cosas. y las puedo pensar, si esto es verdad
pasa esto, si no, esto otro */

/* Ademas en js tenemos el operador basico que es if else, el operador ternario
y el switch */

// if else, es la estructura mas basica que podemos encontrar y sirve para validar x cosa

// el switch sirve para validar casos, y es mas gral. Ademas todos los casos se comparan con la misma
// variable o condicion que definimos en el switch.

// Y el opeeador ternario es lo mismo que el la validacion if else, pero solo pudiendo validar una situacion

const tipoDeSuscripcion = "Basic";

// Ejemplo de switch

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

// Ejemplo de if else

if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
}

else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}

else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}

else if (tipoDeSuscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

// Ejemplo usando arrays y objetos sin condicionales 

let tipoDeAlcance = "Expert"

let Suscripciones = [
    
    { tipo: "Free", acceso: "Solo puedes tomar los cursos gratis" },
    { tipo: "Basic", acceso: "Puedes tomar casi todos los cursos de Platzi durante un mes" },
    { tipo: "Expert", acceso: "Puedes tomar casi todos los cursos de Platzi durante un año" },
    { tipo: "ExpertPlus", acceso: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año" },
];

var encuentraArticulo = tipoDeSuscripcion.find(function(tipoDeSuscripcion){
    return tipoDeSuscripcion.tipo === tipoDeAlcance
});

console.log(encuentraArticulo);

/* --- CICLOS --- */

/* Un ciclo es una porcion de codigo que se va a repetir tantas veces como le indiquemos por medio 
de validaciones, o infinitamente */

/* Basicamente existen los ciclos For, y While */

/* Un ciclo infinito es un ciclo que siempre va a estar activo, 
es decir que la condicion que le hayamos dado
nunca va a ser falsa por ende el codigo se va a ejecutar para siempre y es un problema porque 
al no tener un corte el codigo no va a parar nunca 
y se puede saturar la maquina en la que estemos trabajando */

/* Y si, puedo mezclar ciclos y condicionales a las necesidades que tenga */

// Cilo for y While, ejemplo 1. (Hacen lo mismo solo que en un ejemplo usamos for y en el otro while)

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

var i = 0

while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

// Cilo for y While, ejemplo 2.

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

var i = 10

while (i > 1) {
    console.log("El valor de i es: " + i);
    i--;
}

var cuantoEs = 4
var pregunta

while (pregunta != cuantoEs) {
    pregunta = prompt("Cuanto es 2 + 2? ")
}

console.log("¡Felicitaciones! Diste la respuesta correcta");

/* --- LISTAS --- */

/* Un array en una lista de elementos (Hablando muy basicamente) ej: */

let array = [1, `jaja`, true, false];

/* Y un objeto es una lista de elementos PERO cada elemento tiene un nombre clave (Propiedades y metodos) ej: */

let objeto = {
propiedad: 1,
    propiedad1: `Hola`,
    propiedad2: true,
    metodo: function () {
        console.log("Hola")
    }
};

/* Cuando quiero guardar informacion en distinto orden y de distinto valor sin especificar un nombre para cada valor uso arrays
pero cuando quiero que cada valor tenga su identificador uso objetos */

/* Y si Los arrays pueden guardar objetos. Y los objetos pueden guardar arrays en sus propiedades */

// Ejemplos practicos:

// Recibe cualquier array como parametro e imprime solo el primer valor del array
let miArray1 = ["Holare", "Massimo", "Sulic"]
let miArray2 = ["Holaa", "Massimoo", "Sulicc"]


function funcionDeArrays(miArray) {
    console.log(miArray[0]);
};
 
funcionDeArrays(miArray1);

//Recibe cualquier array como parametro e imprime uno por uno
function funcionDeArrays(miArray) {
    miArray.forEach(function(elemento) {
    console.log(elemento);
});
};

funcionDeArrays(miArray1);

//Recibe cualquier objeto e imprime valor por valor usando for in
let miObjeto = {
    nombre: "Massimo",
    edad: 18,
};

for(var Objeto in miObjeto) {
    console.log(miObjeto[Objeto]);
}
