// Basicamente objet literal convierte los parametros de una funcion en objetos de una forma mas eficiente,
// Ya que el siguiente codigo esta leyendo el parametro user y lo esta conviertiendo a la asignacion user.

// enahced objet literals

function newUser(user, age, country) {
    return {
        user,
        age,
        country,
    }
}

console.log(newUser("massiSulic", 34, "ARG"));