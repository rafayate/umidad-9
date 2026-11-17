
function jugar() {
    let seguirJugando = true;

    while (seguirJugando) {
        let usuario = prompt("Elegí: Piedra, Papel o Tijera").toLowerCase();

        let computadora = Math.random();

        if (computadora < 0.33) {
            computadora = "piedra";
        } else if (computadora < 0.66) {
            computadora = "papel";
        } else {
            computadora = "tijera";
        }

        if (usuario != "piedra" && usuario != "papel" && usuario != "tijera") {
            alert("Opción inválida. Tenés que elegir piedra, papel o tijera.");
        } else {
            alert("Vos elegiste: " + usuario + "\nLa computadora eligió: " + computadora);

            if (usuario == computadora) {
                alert("¡Empate!");
            } else if (
                (usuario == "piedra" && computadora == "tijera") ||
                (usuario == "papel" && computadora == "piedra") ||
                (usuario == "tijera" && computadora == "papel")
            ) {
                alert("¡Ganaste!");
            } else {
                alert("¡Ganó la computadora!");
            }
        }

        seguirJugando = confirm("¿Te gustaría volver a jugar?");
    }
}
