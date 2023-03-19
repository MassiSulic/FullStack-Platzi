var lastName = 'Augusto';
lastName = 'Massimo';
console.log(lastName)


let fruit = 'Apple';
fruit = 'Kiwi'
console.log(fruit)

const animal = 'Dog';
animal = 'Cat';
console.log(animal)

const fruits = function() {
    if(true) {
        var fruit1 = 'Apple'; // Function scope(Alcance) Es decir que tiene alcance global, o fuera de la funcion
        let fruit2 = 'Kiwi'; // block scope solo puede ser llamada dentro de la funcion
        const fruit3 = 'Banana'; // block scope ""
    }
    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)
}

fruits();
