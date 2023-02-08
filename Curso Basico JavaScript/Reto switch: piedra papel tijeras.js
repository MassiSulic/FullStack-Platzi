var piedra = "piedra"
var papel = "papel"
var tijera = "tijera"

var input = prompt("Elige una opcion: piedra, papel, tijera:" + " ");
var usr = input.toLowerCase();

var options = ["piedra", "papel", "tijera"];
var cpu = options[Math.floor(Math.random() * 3) + 1];

switch (true) {

    case usr === cpu:
        console.log("Empate");
        break;

    case usr === piedra && cpu === tijera && cpu != papel:
        console.log("Ganaste!");
        break;
    
    case usr === papel && cpu === piedra && cpu != tijera:
        console.log("Ganaste!");
        break;
    
    case usr === tijera && cpu === papel && cpu != piedra:
        console.log("Ganaste!");
        break;

    default:
        console.log("Perdiste :'(")
}
