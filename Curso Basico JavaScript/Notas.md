# Conceptos / Palabras reservadas

> // (Anota en js)

- `typeof` = Me dice el tipo de dato que estoy ingresando

- `console.log()` = Imprime en pantalla el valor que le pasemos. 

- `return` = Lo ponemos al final de cada funcion para retornar el ultimo valor con el que estuvo operando la funcion.

- `Boolean(Valor)` = Comprueba si el valor que indicamos es verdadero o falso.

## Variables 

Una variables es un espacio en memoria que reservamos para poder utilizarlo.  

- `var` = Palabra reservada para indicar una variable.

## Funciones 

Son un conjunto de sentencias que me permiten tener un resultado, es decir de las variables previamente definidas hago una serie de tareas para resolver lo que necesite.  

- `function` = Palabra reservada para indicar una variable.

## Babel

Babel es un "compilador" (o transpilador) para JavaScript. Básicamente permite transformar código escrito con las últimas y novedosas características de JavaScript y transformarlo en un código que sea entendido por navegadores más antiguos.  

## Scope

El scope es el alcance que van a tener mis variables en mi codigo, lo que significa que las variables que esten dentro de una funcion, es decir en local, no van a poder ser accedidas fuera de esa funcion ya que no van a estar definidas en global si no que solo van a exitir en local. Pero las variables definidas globalmente si van a poder ser accedidas dentro de las funciones es decir en local.

## Hoisting 

El hoisting me dice como js va a ejecutar las variables y las funciones, es decir. Si yo no declare una variables y tampoco la inicialice si trato de imprimirla me devolvera undefined, porque js se encarga de declararla y definirla. Pero las funciones aunque no la haya declarado ni definido hasta ese momento, aunque la mande llamar y este mas abajo si voy a recibir el resultado esperado.

> Pero es una buena practica declarar todas las variables y las funciones en el inicio del codigo.

## Coercion

Hace referencia a como podemos cambiar el tipo de dato por otro, es decir podemos cambiar number por string etc.  

Esto lo puede hacer js por si solo (Coercion del tipo implicita).
O podemos forzar el cambio del tipo de dato (Coercion del tipo explicita). 

> Para cambiar explicitamente el valor de cualquier tipo de dato ocupamos:

- `String("Variables o dato")` = Esto convertira a la fuerza cualquier dato que no sea un string a un string y asi tenemos con todos los tipos de datos:

- Boolean
- Null
- Undefined
- Number
- BigInt
- String
- Symbol

## Truthy y Falsy

Cuando hablamos de valores verdaderos o falsos js tienen por defectos los valores que considera verdaderos y falsos. Los podemos comprobar con el comando Boolean(). Los valores por defecto falsos y verdaderos son los siguientes:

–> Falsy

- Boolean() —> sin ningun valor es false
- Boolean(0) —> false
- Boolean(null) —> false
- Boolean(NaN) —> false // NaN es Not and Number
- Boolean(Undefined) —> false
- Boolean(false) —> false
- Boolean("") —> false

–> Truthy

- Boolean(1) —> true //cualquier numero que no sea igual a cero es true
- Boolean(“a”) —> true
- Boolean(" ") —> true // siendo un espacio el valor es true
- Boolean([]) —> true // un array nos da un true
- Boolean({}) —> true // un objeto nos da el valor de true
- Boolean(function() {}) —> true //una funcion tambien es true
- Boolean(true) —> true

## Asignación, Comparación y Aritméticos

- `=` = Operador de asignacion: sirve para asignar valores por ejemplos a variables.

- `==` = Compara dos valores (Igual que). 3 == "3" = true
- `===` = Compara estrictamente dos valores siendo que tiene que ser totalmente iguales. 3 === "3" = false
- `>` = Mayor que.
- `>=` = Mayor o igual que.
- `<` = Menor que.
- `<=` Menor o igual que.
- `!= | !==` = Diferente que.

- `+` = Se utiliza para operar en suma y tambien para concatenar por ejemplos dos strings.
- `++` = Suma un numero por ejemplo a la variable indicada.
- `+=2` = Suma en este caso dos valores a un valor.
- `-` = Operador de resta.
- `*` = Operador de multiplicacion.
- `/` = Operador de division.
- `%` = Operador de modulo.
- `**` = Operador de potencia.

- `!` = NOT, niega un valor.
- `&&` = AND, compara dos valores si los dos son ciertes es true y los demas ejemplos.
- `||` = OR, Compara dos valores y si uno es verdadero entonces es true la operacion.

## Switch

El switch funciona igual que el if, else if y else. Con la diferencia de que el switch valida casos y no especificamente lo que necesitemos. Es importante tener en cuenta que tiene su propia sintaxis y que un ejemplo puede ser el siguiente:

```
var numero = 1

switch (numero) {
    case 1: 
        console.log("Soy uno!");
        break;

    default: 
        console.log("No soy nada!");
}
```

## Arrays

Un array es una lista donde se pueden agregra datos en js. Para crear un array usamos los [] y la sintaxis para crear un array seria la siguiente:
Cabe aclarar que en programacion todas las cuentas inician desde el 0, eso significa que en los arrays para acceder a su contenido partimos del elemento 0.

```
var (Nombre de mi variable) = [Contenido del Array];
```

### Metodos del objeto array mas utiles

- `.length` = Me dice el largo de mi array.
- `(Nombre de mi array)[Numero]` = Me permite acceder al elemento que estoy especificando.
- `.push` = Me agrega elemento al final de mi array, ej:
    var masFrutas = frutas.push("Uvas");
- `.pop` = Me quita el ultimo elemento de mi array, ej:
    var quito = frutas.pop("Uvas");
- `.unshift` = Me agrega un elemento al principio de mi array.
- `.shift` = Elimina el elemento que se encuentre primero en mi array.
- `.indexOf()` = Me dice la posicion en la que se encuntra el elemento especificado.


## For

> Cuando llamamos a una variable dentro de una funcion y queremos despues recorrer ese array que tenemos de funcion, para que funcione esta llamada: 
> "${}" Tenemos que poner las comillas invertidas `` Porque si no no funciona.

El loop for consta de 3 partes:

- Inicio: se debe inicializar una variable que será evaluada en la expresión a comparar. Esta variable puede ser declarada dentro o fuera de la condición.

- Comparación: es una expresión que debe cumplir la variable inicial, cuando no se cumpla, el ciclo termina.

- Pasos: son los intervalos que cambiará la variable inicial, mientras cumpla con la expresión de comparación.

Donde basicamente lo que hacemos es declaramos la variable que vamos a evaluar, hacemos la evaluacion con algun operador y ponemos algun control para que acabe en algun momento.

## Objetos

Para acceder a los valores de mi objeto uso la siguiente sintaxis:

- miAuto.marca = Siendo que el ".(Algo)" me va a devolver lo que contiene ese algo

Por otra parte para entender mejor los dos tipo de datos que me puedo encontrar en los obejtos lo puedo ver de la siguiente manera:

las caracteristicas de mo objeto como el modelo, la marca o el annio se les llama `Atributos`.  

Mientras que las acciones que yo puedo realizar con ese objeto, que pueden ser funciones como conducir, o vender se les llama `Metodos`.


## Métodos de recorridos de Arrays

Existen métodos de arrays para recorrerlos, y devolver un valor o un array con nuevos resultados. Entre estos están dos muy importantes: map y filter.

Utilizaremos el siguiente array de objetos para los ejemplos de los métodos:

```
var articulos = [
{ nombre: "Bici", costo: 3000 },
{ nombre: "TV", costo: 2500 },
{ nombre: "Libro", costo: 320 },
{ nombre: "Celular", costo: 10000 },
{ nombre: "Laptop", costo: 20000 },
{ nombre: "Teclado", costo: 500 },
{ nombre: "Audifonos", costo: 1700 },
];
```
Ejemplo con .filter
```
var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500
})

console.log(articulosFiltrados)
/* [
  { nombre: 'Libro', costo: 320 },
  { nombre: 'Teclado', costo: 500 }
] */
```
Ejemplo con .map
```
var nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre
});

console.log(nombreArticulos)
```

## Otros metodos para recorrer los arryas

- find() : Devuelve el primer elemento del array que cumpla con la condición dada

- foreach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array

- some() : Comprueba si al menos un elemento del array cumple con la condición que le damos

- filter() : Devuelve todos los elementos del array que cumplan con la condición dada

- El método .push() nos permite agregar uno o más elementos al final de un array. A continuación veremos un ejemplo aplicado con un array que contiene números:

- .shift() eliminar el primer elemento de un array, es decir, elimina el elemento que esté en el índice 0.
