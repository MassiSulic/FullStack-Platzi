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
es simplemente sumar dos textos */

// Sumar numeros 👇, en este caso el resultado seria 2
console.log(1 + 1)

// Concatenar strings 👇, y en este caso el resultado seria 11, porque en el anterior estoy haciendo una
// suma matematica, mientras que en este caso estoy sumando dos textos
console.log("1" + "1")

// Para sumer o concatenar uso el mismo operador +

console.log(1 + 1, "1" + "1")

// Tipo de datos (Para saber el tipo de dato en js podemos usar "typeof()" )

var Nombre = "Massimo"
console.log(typeof(Nombre))
// return: String

var Apellido = "Sulic"
console.log(typeof(Apellido))
// return: String

var nombreDeUsuarioPlatzi = "MassiSulic"
console.log(typeof(nombreDeUsuarioPlatzi))
// return: String

var Edad = 18
console.log(typeof(Edad))
// return: Number

var correoElectronico = "massimo.a.sulic@gmail.com"
console.log(typeof(correoElectronico))
// return: String

var mayorDeEdad = true
console.log(typeof(mayorDeEdad))
// return: Boolean

var dineroAhorrado = 10000
console.log(typeof(dineroAhorrado))
// return: Number

var Deudas = 100
console.log(typeof(Deudas))
// return: Number

console.log(Nombre, Apellido)
console.log(dineroAhorrado - Deudas)

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

const nombre = "Juan David";
const apellido = "Castro Gallego";
const nick = "juandc";

function nombreCompleto() {
    return nombre + " " + apellido
    
}

console.log("Mi nombre es " + nombreCompleto() + ", pero prefiero que me digas " + nick + ".");

/* --- CONDICIONALES --- */

/* Las condicionales son estructuras de control para tomar desiciones
es decir que son lineas de codigo que me permiten validar cosasy las puedo pensar, si esto es verdad
pasa esto, si no, esto otro */

/* Ademas en js tenemos el operador basico que es if else, el operador ternario
y el switch */

// if else, es la estructura mas basica que podemos encontrar y sirve para validar x cosa

// el switch sirve para validar casos, y es mas gral. Ademas puedo validaro todos los casos que necesite

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
al no tener un corteel codigo no va a parar nunca 
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

/* Para entender que son los arrays y los objetos tenemos que definir que son los objetos en programacion:
Para entender que son los objetos vamos a poner el ejemplo de un auto. El auto tiene adjetivos que pueden
ser: el color y el modelo. Y tambien tiene acciones que puede realizar: ir hacia adelante y hacia atras */

/* Esto lo podemos traducir a la programacion de la siguiente manera: Una vez creado el obejto que en 
este caso puede ser "Auto" (Con su respectiva sintaxis) podemos decir que tiene propiedades,
Estas propiedases son los adjetivos del auto: Color y modelo. Pero ademas podemos decir que tiene metodos
que son las acciones que puede realizar ese auto, como ir hacia adelante y hacia atras */

/* Por eso podemos decir que los arrays [] son estructuras de datos de tipo objeto, es decir que pueden
tener, propiedades y metodos. Y que sirven para almacenar una colección de elementos 
del mismo tipo en una sola variable. Es decir un array es una forma de almacenar múltiples valores en una sola variable. */

/* Y por otro aldo los objetos {} si estan mas enfocados a almacenar propiedades y metodos y puede ser pensado como 
como un contenedor de información que puede ser accedida y manipulada mediante su nombre o clave.*/

/* Para saber cuadno usar cada una hay que tener en cuenta dos puntos clave, 
1) como necesito acceder a esa informacion 2) que informacion tengo que guardar
Los objetos son mejores para guardar informacion con etiquetas estando jerarquicamente ordenada
Mientras que los arryas son mas como listas de tareas y la informacion se estipula secuencialmente */

/* Y si, se pueden mezclar objetos con arrays y arrays con objetos. Esto puede ser util a la hora
de consultar informacion. Por ejemplo, si tiene una lista de usuarios, 
cada usuario puede ser representado como un objeto con sus propias propiedades 
y almacenados en un array. Por otro lado, si necesita almacenar una matriz de datos, 
puede utilizar un array de arrays, donde cada array interno representa una fila de datos.*/

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
