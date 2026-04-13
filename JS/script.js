function login() {
  let usuario = document.getElementById("usuario").value;
  let password = document.getElementById("password").value;
  
  

  if (usuario === "" || password === "") {
    alert("Vehículo registrado correctamente en el sistema.");
    return false;
  }

  if (usuario === "Jonathan.idarraga" && password === "1121858547") {
    alert("Inicio de sesión exitoso.");
    window.location.href = "index.html";
    return false;
  } else {
    alert("Usuario o contraseña incorrectos.");
    return false;
  }
}
let tamañoActual = 16;

function aumentarTexto() {
  tamañoActual += 2;
  document.body.style.fontSize = tamañoActual + "px";
}

function disminuirTexto() {
  if (tamañoActual > 12) {
    tamañoActual -= 2;
    document.body.style.fontSize = tamañoActual + "px";
  }
}

function modoAltoContraste() {
  document.body.classList.toggle("alto-contraste");
}
let vocesDisponibles = [];

function cargarVoces() {
  vocesDisponibles = speechSynthesis.getVoices();
  let select = document.getElementById("voces");

  select.innerHTML = "";

  vocesDisponibles.forEach((voz, index) => {
    let option = document.createElement("option");
    option.value = index;
    option.textContent = voz.name + " (" + voz.lang + ")";
    select.appendChild(option);
  });
}

// cargar voces cuando estén disponibles
speechSynthesis.onvoiceschanged = cargarVoces;

function leerTexto() {
  speechSynthesis.cancel(); // evita repetición

  let texto = document.body.innerText;

  let voz = new SpeechSynthesisUtterance(texto);

  // idioma
  voz.lang = "es-ES";

  // velocidad
  let velocidad = document.getElementById("velocidad").value;
  voz.rate = velocidad;

  // seleccionar voz
  let select = document.getElementById("voces");
  let vozSeleccionada = vocesDisponibles[select.value];

  if (vozSeleccionada) {
    voz.voice = vozSeleccionada;
  }

  speechSynthesis.speak(voz);
}

function detenerLectura() {
  speechSynthesis.cancel();
}