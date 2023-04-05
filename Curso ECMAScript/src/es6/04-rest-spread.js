// Arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// Object destructuring

let user = {username: 'Massimo', age: 18}
let { username, age } = user;
console.log(username, user.age);


// En los ejemplos de arriba se veia como se teneia que destructurar un array o un objeto antes, pero con el spread
// es mas facil, ya que con los 3 puntos y el nombre del array u objeto lo estamos destructurando.

// Spread operator

let person = {name: 'oscar', age: 18};
let country = 'ARG';

let data = { id: 1, ...person, country };
console.log(data);

// Por otro lado el reset hace todo lo contrario, estructura arrays. Es decir que si le pasamos
// una secuencia de cosas como parametro de una funcion y utilizamos el reset lo convertira en un array
// para que podamos trabajarlo mejor

// Rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);


// Ejercicio

function solution(
    json1 = {
    name: "Mr. Michi",
    food: "Pescado"
    },

    json2 = {
    age: 12,
    color: "Blanco"
    }
){
    return {...json1, ...json2}
}

solution()
