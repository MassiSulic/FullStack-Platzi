// Funcion contructora, es basicamente hacer una plantilla de lo que 
// queremos hacer con nuestro objeto y que se vaya haciendo automaticamente
// Sin tener que crear objeto x objeto

class auto {
    constructor(marca, modelo, annio) {
        // En este cado this esta haciendo referencia a la funcion contructora
        this.marca = marca;
        this.modelo = modelo;
        this.annio = annio;
    }
}

// Y new hace referencia a que vamos a crear un objeto a partir de un objeto, 
// que en este caso va a ser auto, es decir que me sirve para decir cual 
// va a ser mi plantilla a la hora de crear el objeto
var autoNuevo = new auto("Tesla", "Model 3", 2020);
var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Toyota", "Corolla", 2020);

// Reto:

function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
  var autos = [];
  for(let i = 0 ; i < 2 ; i++){
    var marca = prompt("Ingresa la marca del auto ");
    var modelo = prompt("Ingresa el modelo del auto ");
    var annio = prompt("Ingresa el año del auto ");
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }
  