
let victoriasUsuario = 0;
let victoriasMaquina = 0;

while (victoriasUsuario < 2 && victoriasMaquina < 2) {

    let jugada = prompt("Elegí: Piedra, Papel o Tijera").toLowerCase();

    let azar = Math.random();
    let jugadaMaquina = "";

    if (azar < 0.33) {
        jugadaMaquina = "piedra";
    } else if (azar < 0.66) {
        jugadaMaquina = "papel";
    } else {
        jugadaMaquina = "tijera";
    }

    console.log(`La máquina eligió: ${jugadaMaquina}`);

    if (jugada != "piedra" && jugada != "papel" && jugada != "tijera") {
        alert("Jugada inválida. Intentá de nuevo.");
    } else {
        alert(`Vos elegiste: ${jugada}
La máquina eligió: ${jugadaMaquina}`);

        if (jugada == jugadaMaquina) {
            alert("¡Empate!");
        } else if (
            (jugada == "piedra" && jugadaMaquina == "tijera") ||
            (jugada == "papel" && jugadaMaquina == "piedra") ||
            (jugada == "tijera" && jugadaMaquina == "papel")
        ) {
            alert("¡Ganaste esta ronda!");
            victoriasUsuario++;
        } else {
            alert("¡Ganó la máquina esta ronda!");
            victoriasMaquina++;
        }
    }

    console.log(`Usuario: ${victoriasUsuario} | Máquina: ${victoriasMaquina}`);
}

let campeon = victoriasUsuario == 2 ? "¡Ganaste el torneo!" : "¡La máquina ganó el torneo!";

alert(campeon);
