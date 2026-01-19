function irA(url) {
  window.location.href = url;
}

/* Carrusel automático */
const imagenes = [
  "https://picsum.photos/800/400?random=1",
  "https://picsum.photos/800/400?random=2",
  "https://picsum.photos/800/400?random=3",
  "https://picsum.photos/800/400?random=4"
];

let index = 0;
const img = document.getElementById("carrusel-img");

setInterval(() => {
  index = (index + 1) % imagenes.length;
  img.style.opacity = 0;

  setTimeout(() => {
    img.src = imagenes[index];
    img.style.opacity = 1;
  }, 400);

}, 3000);