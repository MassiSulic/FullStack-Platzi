var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera";

function juego (usr, cpu) {

    if (usr === cpu) {
        console.log("Empate")
    }

    else if (usr === piedra && cpu === tijera && cpu != papel) {
        console.log("Gana usuario con piedra");
    }
    
    else if (usr === papel && cpu === piedra && cpu != tijera) {
        console.log("Gana usuario con papel");
    }

    else if (usr === tijera && cpu === papel && cpu != piedra) {
        console.log("Gana usuario con tijera");
    }
    
    else {
        console.log("¡Gano cpu!")
    }

}

console.log(juego (tijera, piedra));
