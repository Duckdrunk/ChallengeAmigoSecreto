// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const inputNombre = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function agregarAmigo() {
    const nombre = inputNombre.value.trim();

    if (!nombre) {
        mostrarAlerta("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    inputNombre.value = "";
    mostrarAmigos();
}
