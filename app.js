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

function mostrarAmigos() {
    listaAmigos.innerHTML = "";
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        mostrarAlerta("No hay amigos para sortear.");
        return;
    }

    const ganador = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.textContent = "El amigo seleccionado es: " + ganador;

    listaAmigos.innerHTML = "";
    amigos = [];
}

function mostrarAlerta(mensaje){
    alert(mensaje);
}