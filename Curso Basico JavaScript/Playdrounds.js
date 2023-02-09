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

  // Ejercicos 3

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
