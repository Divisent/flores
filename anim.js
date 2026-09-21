// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos.
// Los "time" son ESTIMADOS repartidos según la estructura verso/coro de la canción
// (verso1 - precoro - coro - verso2 - coro extendido - coro corto - coro final).
// Completá cada "text" con tu letra y ajustá los "time" escuchando la canción
// para que la aparición de cada línea calce exacta con el audio.
var lyricsData = [
  // --- Verso 1 (8 líneas) ---
  { text: "Quería evitar el amor", time: 10 },
  { text: "Y la vida color de rosa", time: 13 },
  { text: "Obviar cosas del corazón", time: 16 },
  { text: "Y poder hablar de otra cosa", time: 20 },
  { text: "Quería evitar la pasión", time: 23 },
  { text: "Y esos pasajes que se pintan", time: 26 },
  { text: "Cuando la obsesión y el deseo", time: 29 },
  { text: "Te alteran por una imagen femenina", time: 32 },

  // --- Pre-coro (5 líneas) ---
  { text: "Pero da la casualidad", time: 40 },
  { text: "Que esa alteración ya la tengo", time: 43 },
  { text: "Por eso tantas sensaciones", time: 46 },
  { text: "Que tengo en el pecho", time: 50 },
  { text: "Ignorarlas no puedo", time: 53 },

  // --- Coro 1 (5 líneas) ---
  { text: "Vos sos esa simple razón", time: 62 },
  { text: "Por la que volví a sonreír", time: 65 },
  { text: "Por la que levanto la vista y veo lindo el cielo", time: 68 },
  { text: "Aunque esté todo gris", time: 71 },
  { text: "Aunque esté todo gris", time: 74 },

  // --- Verso 2 (11 líneas) ---
  { text: "Te juro que ya me rendí", time: 88 },
  { text: "Porque aunque lo busque y lo busque", time: 91 },
  { text: "No puedo creer que de vos, no exista algo que no me guste", time: 94 },
  { text: "El sábado que te besé", time: 98 },
  { text: "Te hubiera tenido hasta el lunes", time: 101 },
  { text: "No supe que inventar para que no se vaya", time: 104 },
  { text: "De mis manos tu perfume", time: 107 },
  { text: "Ya ves no me queda otra opción", time: 110 },
  { text: "No pude evitar el amor", time: 114 },
  { text: "Ni siquiera consigo pensar en algo que no tenga", time: 117 },
  { text: "Que ver con vos", time: 120 },

  // --- Coro 2 extendido (9 líneas) ---
  { text: "Vos sos esa simple razón", time: 130 },
  { text: "Por la que volví a sonreír", time: 133 },
  { text: "Por la que levanto la vista y veo lindo el cielo", time: 136 },
  { text: "Aunque esté todo gris", time: 139 },
  { text: "Vos sos esa linda razón", time: 142 },
  { text: "Porque siempre quiero volver", time: 145 },
  { text: "Para agradecerte porque", time: 148 },
  { text: "Lo que ayer me dolía hoy dejó de doler", time: 151 },
  { text: "Me dejó de doler", time: 154 },

  // --- Coro 3 corto (3 líneas) ---
  { text: "Vos sos esa simple razón", time: 165 },
  { text: "Y volvi a sonreir", time: 168 },
  { text: "Aunque este todo gris", time: 171 },

  // --- Coro 4 final extendido (5 líneas) ---
  { text: "Vos sos esa linda razón", time: 178 },
  { text: "Porque siempre quiero volver", time: 181 },
  { text: "Para agradecerte porque", time: 184 },
  { text: "Lo que ayer me dolía hoy dejó de doler", time: 188 },
  { text: "Me dejó de doler", time: 191 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 195 segundos (195,000 milisegundos),
// ajustado a la duración de la nueva canción (~198s)
setTimeout(ocultarTitulo, 195000);
