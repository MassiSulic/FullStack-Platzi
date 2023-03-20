// Arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// Object destructuring

let user = {username: 'Massimo', age: 18}
let { username, age } = user;
console.log(username, user.age);


// Spread operator

let person = {name: 'oscar', age: 18};
let country = 'ARG';

let data = { id: 1, ...person, country };
console.log(data);

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
