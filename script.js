// ===== Carrusel =====
const imagenes = [
  "https://picsum.photos/700/400?1",
  "https://picsum.photos/700/400?2",
  "https://picsum.photos/700/400?3",
  "https://picsum.photos/700/400?4",
  "https://picsum.photos/700/400?5"
];

let indexImg = 0;
const carrusel = document.getElementById("carrusel-img");

setInterval(() => {
  indexImg = (indexImg + 1) % imagenes.length;
  carrusel.src = imagenes[indexImg];
}, 3000);

// ===== Música =====
const canciones = [
  "music/1.m4a",
  "music/2.m4a",
  "music/3.mp3",
  "music/4.mp3",
  "music/5.mp3"
];

const audio = document.getElementById("audio-player");
let indexCancion = 0;

audio.src = canciones[indexCancion];
audio.volume = 1.0; // ?? 100%

audio.addEventListener("ended", () => {
  indexCancion = (indexCancion + 1) % canciones.length;
  audio.src = canciones[indexCancion];
  audio.play();
});

window.addEventListener("load", () => {
  audio.play().catch(() => {
    console.log("Autoplay bloqueado");
  });
});
function irA(pagina) {
  window.location.href = pagina;
}
