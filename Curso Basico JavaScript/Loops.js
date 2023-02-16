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
