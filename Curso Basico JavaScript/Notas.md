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