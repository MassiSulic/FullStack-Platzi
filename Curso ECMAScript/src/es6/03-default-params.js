function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 18;
    var country = country || 'ARG';
    console.log(name, age, country);
}

newUser();
newUser('David', 15, 'CO')

// El nombre lo explica solo, basicamente en los mismos argumentos de una funcion podemos definir parametros por defecto


function newAdmin(name = 'Massimo', age = 18, country = 'ARG') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 28, 'PE');
