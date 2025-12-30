const izqImgs = [
  "../IMG/mail1.png",
  "../IMG/mail2.png",
  "../IMG/mail3.png"
];

const derImgs = [
  "../IMG/support1.png",
  "../IMG/support2.png",
  "../IMG/support3.png"
];

let i = 0;

setInterval(() => {
  i = (i + 1) % izqImgs.length;
  document.getElementById("soporte-izq").src = izqImgs[i];
  document.getElementById("soporte-der").src = derImgs[i];
}, 3000);
