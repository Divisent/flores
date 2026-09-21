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
  { text: "", time: 10 },
  { text: "", time: 13 },
  { text: "", time: 16 },
  { text: "", time: 20 },
  { text: "", time: 23 },
  { text: "", time: 26 },
  { text: "", time: 29 },
  { text: "", time: 32 },

  // --- Pre-coro (5 líneas) ---
  { text: "", time: 40 },
  { text: "", time: 43 },
  { text: "", time: 46 },
  { text: "", time: 50 },
  { text: "", time: 53 },

  // --- Coro 1 (5 líneas) ---
  { text: "", time: 62 },
  { text: "", time: 65 },
  { text: "", time: 68 },
  { text: "", time: 71 },
  { text: "", time: 74 },

  // --- Verso 2 (11 líneas) ---
  { text: "", time: 88 },
  { text: "", time: 91 },
  { text: "", time: 94 },
  { text: "", time: 98 },
  { text: "", time: 101 },
  { text: "", time: 104 },
  { text: "", time: 107 },
  { text: "", time: 110 },
  { text: "", time: 114 },
  { text: "", time: 117 },
  { text: "", time: 120 },

  // --- Coro 2 extendido (9 líneas) ---
  { text: "", time: 130 },
  { text: "", time: 133 },
  { text: "", time: 136 },
  { text: "", time: 139 },
  { text: "", time: 142 },
  { text: "", time: 145 },
  { text: "", time: 148 },
  { text: "", time: 151 },
  { text: "", time: 154 },

  // --- Coro 3 corto (3 líneas) ---
  { text: "", time: 165 },
  { text: "", time: 168 },
  { text: "", time: 171 },

  // --- Coro 4 final extendido (5 líneas) ---
  { text: "", time: 178 },
  { text: "", time: 181 },
  { text: "", time: 184 },
  { text: "", time: 188 },
  { text: "", time: 191 },
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
