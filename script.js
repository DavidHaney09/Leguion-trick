function irA(url) {
  window.location.href = url;
}

/* Carrusel */
const imgs = [
  "https://picsum.photos/900/400?1",
  "https://picsum.photos/900/400?2",
  "https://picsum.photos/900/400?3",
  "https://picsum.photos/900/400?4"
];

let i = 0;
const carrusel = document.getElementById("carrusel");

setInterval(() => {
  i = (i + 1) % imgs.length;
  carrusel.style.opacity = 0;

  setTimeout(() => {
    carrusel.src = imgs[i];
    carrusel.style.opacity = 1;
  }, 400);
}, 3000);