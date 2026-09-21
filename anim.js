// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos.
// Los tiempos fueron ajustados analizando la energía del audio real
// (cortes de la canción en ~66s, ~84s, ~116s, ~148-152s y el final ~188s).
var lyricsData = [
  // --- Verso 1 (8 líneas) ---
  { text: "Quería evitar el amor", time: 13 },
  { text: "Y la vida color de rosa", time: 17 },
  { text: "Obviar cosas del corazón", time: 20 },
  { text: "Y poder hablar de otra cosa", time: 24 },
  { text: "Quería evitar la pasión", time: 27 },
  { text: "Y esos pasajes que se pintan", time: 30 },
  { text: "Cuando la obsesión y el deseo", time: 34 },
  { text: "Te alteran por una imagen femenina", time: 37 },

  // --- Pre-coro (5 líneas) ---
  { text: "Pero da la casualidad", time: 39 },
  { text: "Que esa alteración ya la tengo", time: 45 },
  { text: "Por eso tantas sensaciones", time: 50 },
  { text: "Que tengo en el pecho", time: 56 },
  { text: "Ignorarlas no puedo", time: 61 },

  // --- Coro 1 (5 líneas) ---
  { text: "Vos sos esa simple razón", time: 68 },
  { text: "Por la que volví a sonreír", time: 71 },
  { text: "Por la que levanto la vista y veo lindo el cielo", time: 74 },
  { text: "Aunque esté todo gris", time: 77 },
  { text: "Aunque esté todo gris", time: 80 },

  // --- Verso 2 (11 líneas) ---
  { text: "Te juro que ya me rendí", time: 85 },
  { text: "Porque aunque lo busque y lo busque", time: 88 },
  { text: "No puedo creer que de vos, no exista algo que no me guste", time: 90 },
  { text: "El sábado que te besé", time: 93 },
  { text: "Te hubiera tenido hasta el lunes", time: 96 },
  { text: "No supe que inventar para que no se vaya", time: 99 },
  { text: "De mis manos tu perfume", time: 101 },
  { text: "Ya ves no me queda otra opción", time: 104 },
  { text: "No pude evitar el amor", time: 107 },
  { text: "Ni siquiera consigo pensar en algo que no tenga", time: 109 },
  { text: "Que ver con vos", time: 112 },

  // --- Coro 2 extendido (9 líneas) ---
  { text: "Vos sos esa simple razón", time: 116 },
  { text: "Por la que volví a sonreír", time: 119 },
  { text: "Por la que levanto la vista y veo lindo el cielo", time: 122 },
  { text: "Aunque esté todo gris", time: 126 },
  { text: "Vos sos esa linda razón", time: 129 },
  { text: "Porque siempre quiero volver", time: 132 },
  { text: "Para agradecerte porque", time: 135 },
  { text: "Lo que ayer me dolía hoy dejó de doler", time: 138 },
  { text: "Me dejó de doler", time: 142 },

  // --- Coro 3 corto (3 líneas) ---
  { text: "Vos sos esa simple razón", time: 152 },
  { text: "Y volvi a sonreir", time: 155 },
  { text: "Aunque este todo gris", time: 158 },

  // --- Coro 4 final extendido (5 líneas) ---
  { text: "Vos sos esa linda razón", time: 162 },
  { text: "Porque siempre quiero volver", time: 167 },
  { text: "Para agradecerte porque", time: 171 },
  { text: "Lo que ayer me dolía hoy dejó de doler", time: 176 },
  { text: "Me dejó de doler", time: 180 },
];

// Animar las letras: cada línea se muestra desde su "time" hasta que
// empieza la línea siguiente (en vez de una ventana fija de 6s, que
// hacía que una línea se quedara pisando a la próxima si estaban
// muy pegadas en el tiempo).
function updateLyrics() {
  var time = audio.currentTime;

  var idx = -1;
  for (var i = 0; i < lyricsData.length; i++) {
    if (time >= lyricsData[i].time) {
      idx = i;
    } else {
      break;
    }
  }

  if (idx === -1) {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
    return;
  }

  var currentLine = lyricsData[idx];
  var nextTime =
    idx + 1 < lyricsData.length ? lyricsData[idx + 1].time : currentLine.time + 6;

  if (time < nextTime) {
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 200);

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
