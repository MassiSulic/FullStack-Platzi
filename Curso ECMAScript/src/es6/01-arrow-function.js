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

// Basicamente el arrow function es una forma mas simple de utilizar las funciones por dos motivos
// 1) Almacenamos directamente las funciones en constantes lo que permite trabajar con menos lineas de codigo
// 2) Podemos utilizar menos sintaxis, ya que en algunos casos se puede omitir las llaves y simepre se omite el return
