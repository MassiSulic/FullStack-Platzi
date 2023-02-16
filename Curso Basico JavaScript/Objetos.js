// Sintaxis de los objetos en js

var Nombre = {};

// Ejemplo de objeto en js

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020
};

// Metodos. Los metodos son funciones que pueden estar dentro de los objetos
// Asi como puedo tener clases de objetos puedo tener metodos que hacen referencia
// a funciones que se ejecutan dentro de un objeto

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        // Y el this es la forma de hacer referencia a mi objeto (En este caso miAuto)
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
};

// Y para llamar a este objeto que tiene un metodo lo llamo como si fuera una funcion

miAuto.detalleDelAuto();