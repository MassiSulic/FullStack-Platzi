let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world + '!';

// Esta es otra forma mas eficiente de concatenar strings

// Template literals
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2)

// Y esta es la forma mas eficiente de hacer un salto de linea, y todo usando (``)

// Multi-line strings
let lorem = 'esto es un string \n' + 'esto es otra linea';

let lorem2 = `Esta es una frase epica
la continuacion de la frase epica
`;

console.log(lorem);
console.log(lorem2);
