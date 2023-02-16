// For

// Estructura del loop for

//for (condición) {
    // Bloque de código
//}

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log("Hola, ", `${estudiante}`);
}

// Esta variable de for me va a permitir recorrer todo el array
//Y cuando se quede sin numeros para sumar a la variable de i va a parar

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

// For of

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log("Hola, ", `${estudiante}`);
}

for(var miembros of estudiantes){
    saludarEstudiantes(miembros);
}

// While

while (condición) {
    // Bloque de código
    // Cambiar la condición para salir del bucle
}

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

// Lo que sucede en este caso es que el ciclo while esta validando que mi array
// Sea mayor a 0, en el momento que sea igual se corta, 
// Entonces lo que hago es sacar un estudiante de ese array cada vez que el ciclo se ejecuta
// Hasta que no tengo mas estudiantes nuevos.
while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}