// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Array para almacenar los nombres
let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const lista = document.getElementById("listaAmigos");

  if (!input || !lista) {
    alert("No se encontraron los elementos requeridos en el HTML.");
    return;
  }

  const nombre = (input.value || "").trim();

  if (nombre.length === 0) {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Agregar al arreglo y refrescar la lista
  amigos.push(nombre);
  actualizarLista();

  // Limpiar campo y mantener foco para una entrada fluida
  input.value = "";
  input.focus();
}

/**
 * Pinta el contenido de `amigos` dentro del <ul id="listaAmigos">,
 * limpiando antes para evitar duplicados visuales.
 */
function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  if (!lista) return;

  // Limpiar la lista previa
  lista.innerHTML = "";

  // Crear un <li> por cada amigo
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

/**
 * Sortea un amigo aleatoriamente del array `amigos` y lo muestra en
 * <ul id="resultado"> como un único <li>.
 */
function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  if (!resultado) {
    alert("No se encontró el contenedor de resultado.");
    return;
  }

  if (amigos.length === 0) {
    alert("Aún no hay nombres para sortear. Agrega al menos uno.");
    // Limpiar cualquier resultado previo
    resultado.innerHTML = "";
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[indice];

  // Limpiamos la lista de resultado y mostramos solo el sorteado
  resultado.innerHTML = "";
  const li = document.createElement("li");
  const strong = document.createElement("strong");
  strong.textContent = elegido;
  li.textContent = "🎉 Amigo secreto: ";
  li.appendChild(strong);
  resultado.appendChild(li);
}

/* ==== Mejora UX: Enter para agregar ==== */
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("amigo");
  if (input) {
    input.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter") agregarAmigo();
    });
  }
});

// Exponer funciones al scope global para que los onclick del HTML funcionen
window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;
