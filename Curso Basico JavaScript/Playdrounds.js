// Ejercicio 1

function solution(valor) {

    console.log(typeof valor);
    
    return valor;
  }
  
  solution(true);

  // Ejercicio 2

  export function solution(secreto) {
    return (secreto > 5);
  }

  // Ejercico 3

export function solution(article) {

  switch (article) {

    case "computadora":
      console.log("Con mi computadora puedo programar usando JavaScript");
      break;

    case "celular":
      console.log("En mi celular puedo aprender usando la app de Platzi");
      break;

    case "cable":
      console.log("¡Hay un cable en mi bota!");
      break;
    
    default:
      console.log("Artículo no encontrado")
  }
}

// Ejercicio 4

export function solution(arraySecreto) {
  
  var comparacion = typeof(arraySecreto[0]);
  var resultado = comparacion === "string" ? true : false;
  return(resultado);
}

solution(["Huevo", "Gallina", "Vaca"])
solution([1, "Gallina", "Vaca"])


export function solution(cars) {
  // 👇 Este es el código que no funcionaba porque sol devolvia la primera coincidencia
  // para solucionarlo habia que cambiar el find por el filter
  return cars.filter(function (car) {
    if (car.licensePlate) {
      return true;
    } else {
      return false;
    }
  });
}