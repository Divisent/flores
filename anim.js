// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos.
// Los tiempos fueron ajustados analizando la energía del audio real
// (cortes de la canción en ~66s, ~84s, ~116s, ~148-152s y el final ~188s).
var lyricsData = [
  // --- Verso 1 (8 líneas) ---
  { text: "Quería evitar el amor", time: 9 },
  { text: "Y la vida color de rosa", time: 13 },
  { text: "Obviar cosas del corazón", time: 17 },
  { text: "Y poder hablar de otra cosa", time: 21 },
  { text: "Quería evitar la pasión", time: 25 },
  { text: "Y esos pasajes que se pintan", time: 28 },
  { text: "Cuando la obsesión y el deseo", time: 32 },
  { text: "Te alteran por una imagen femenina", time: 35 },

  // --- Pre-coro (5 líneas) ---
  { text: "Pero da la casualidad", time: 40 },
  { text: "Que esa alteración ya la tengo", time: 46 },
  { text: "Por eso tantas sensaciones", time: 51 },
  { text: "Que tengo en el pecho", time: 57 },
  { text: "Ignorarlas no puedo", time: 62 },

  // --- Coro 1 (5 líneas) ---
  { text: "Vos sos esa simple razón", time: 69 },
  { text: "Por la que volví a sonreír", time: 72 },
  { text: "Por la que levanto la vista y veo lindo el cielo", time: 75 },
  { text: "Aunque esté todo gris", time: 78 },
  { text: "Aunque esté todo gris", time: 81 },

  // --- Verso 2 (11 líneas) ---
  { text: "Te juro que ya me rendí", time: 86 },
  { text: "Porque aunque lo busque y lo busque", time: 89 },
  { text: "No puedo creer que de vos, no exista algo que no me guste", time: 91 },
  { text: "El sábado que te besé", time: 94 },
  { text: "Te hubiera tenido hasta el lunes", time: 97 },
  { text: "No supe que inventar para que no se vaya", time: 100 },
  { text: "De mis manos tu perfume", time: 102 },
  { text: "Ya ves no me queda otra opción", time: 105 },
  { text: "No pude evitar el amor", time: 108 },
  { text: "Ni siquiera consigo pensar en algo que no tenga", time: 110 },
  { text: "Que ver con vos", time: 113 },

  // --- Coro 2 extendido (9 líneas) ---
  { text: "Vos sos esa simple razón", time: 117 },
  { text: "Por la que volví a sonreír", time: 120 },
  { text: "Por la que levanto la vista y veo lindo el cielo", time: 123 },
  { text: "Aunque esté todo gris", time: 127 },
  { text: "Vos sos esa linda razón", time: 130 },
  { text: "Porque siempre quiero volver", time: 133 },
  { text: "Para agradecerte porque", time: 136 },
  { text: "Lo que ayer me dolía hoy dejó de doler", time: 139 },
  { text: "Me dejó de doler", time: 143 },

  // --- Coro 3 corto (3 líneas) ---
  { text: "Vos sos esa simple razón", time: 153 },
  { text: "Y volvi a sonreir", time: 156 },
  { text: "Aunque este todo gris", time: 159 },

  // --- Coro 4 final extendido (5 líneas) ---
  { text: "Vos sos esa linda razón", time: 163 },
  { text: "Porque siempre quiero volver", time: 168 },
  { text: "Para agradecerte porque", time: 172 },
  { text: "Lo que ayer me dolía hoy dejó de doler", time: 177 },
  { text: "Me dejó de doler", time: 181 },
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
// Función para ocultar el título después de la canción
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función cuando la canción empieza a apagarse (~188s)
setTimeout(ocultarTitulo, 188000);
