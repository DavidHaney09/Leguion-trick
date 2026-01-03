// ENTRADA
window.addEventListener("load", () => {
  document.querySelector(".contacto-box")?.classList.add("mostrar");
});

// GLOW INPUTS
document.querySelectorAll("input, textarea").forEach(el => {
  el.addEventListener("focus", () => {
    el.style.boxShadow = "0 0 12px #00f5ff";
  });
  el.addEventListener("blur", () => {
    el.style.boxShadow = "none";
  });
});

// FORM
const form = document.querySelector("form");

form.addEventListener("submit", e => {
  let ok = true;

  form.querySelectorAll("[required]").forEach(campo => {
    if (!campo.value.trim()) {
      campo.classList.add("error");
      ok = false;
      setTimeout(()=>campo.classList.remove("error"),600);
    }
  });

  if (!ok) {
    e.preventDefault();
    sacudir(form);
    toast("⚠️ Completa todo", "error");
    return;
  }

  toast("✅ Enviado correctamente", "ok");
});

// TOAST
function toast(msg, tipo) {
  const t = document.createElement("div");
  t.className = `toast ${tipo}`;
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(()=>t.classList.add("show"),100);
  setTimeout(()=>t.remove(),3000);
}

// SHAKE
function sacudir(el) {
  el.classList.add("shake");
  setTimeout(()=>el.classList.remove("shake"),400);
}