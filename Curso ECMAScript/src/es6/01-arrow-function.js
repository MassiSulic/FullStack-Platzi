// Funion normal

function square(num) {
    return num * num;
}

// Arrow function. Mas simple
const square = (num) => {
    return num * num;
}

// Arrow function con el return implicito
const square = num => num * num
console.log(square(4))