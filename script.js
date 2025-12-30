* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', sans-serif;
}

body {
  color: #fff;
  overflow-x: hidden;
}

/* Fondo */
.fondo {
  position: fixed;
  inset: 0;
  background: linear-gradient(120deg, #5f2cff, #1e90ff, #8a2be2);
  background-size: 300% 300%;
  animation: fondo 12s infinite ease-in-out;
  z-index: -1;
}

@keyframes fondo {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Header */
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
}

.logo {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 12px rgba(95,44,255,0.7);
}

.titulo {
  font-size: 2.2rem;
}

/* Layout */
.contenedor {
  display: grid;
  grid-template-columns: 240px 1fr 420px;
  gap: 25px;
  padding: 25px;
}

/* Botonera */
.botonera {
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 70vh;
  overflow-y: auto;
}

.botonera button {
  padding: 12px;
  border: none;
  background: rgba(0,0,0,0.45);
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
}

.botonera button:hover {
  background: #5f2cff;
}

/* Descripción */
.descripcion {
  background: rgba(0,0,0,0.45);
  padding: 25px;
  border-radius: 12px;
}

/* Carrusel */
.carrusel {
  display: flex;
  justify-content: center;
}

.carrusel img {
  width: 100%;
  max-width: 420px;
  height: 420px;
  object-fit: cover;
  border-radius: 15px;
}

/* Footer */
.footer {
  text-align: center;
  padding: 10px;
}

.redes {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 8px;
}

.redes button {
  padding: 8px 14px;
  border-radius: 6px;
  border: none;
  background: #1e90ff;
  color: #fff;
}

/* 📱 Responsive */
@media (max-width: 900px) {
  .contenedor {
    grid-template-columns: 1fr;
  }

  .botonera {
    flex-direction: row;
    height: auto;
    overflow-x: auto;
  }

  .botonera button {
    white-space: nowrap;
  }

  .carrusel img {
    height: 280px;
  }
}
