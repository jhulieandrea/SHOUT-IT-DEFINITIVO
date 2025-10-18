const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

// Servir carpeta 'public' completa para que las imágenes funcionen
app.use('/imagenes', express.static('../public/imagenes'));

// Tipos de violencia
const tiposViolencia = [
  { id: 1, nombre: "Física", imagen: "/imagenes/tipos_violencia/fisica.png" },
  { id: 2, nombre: "Psicológica", imagen: "/imagenes/tipos_violencia/psicologica.png" },
  { id: 3, nombre: "Género", imagen: "/imagenes/tipos_violencia/genero.png" },
  { id: 4, nombre: "Sexual", imagen: "/imagenes/tipos_violencia/sexual.png" },
  { id: 5, nombre: "Económica", imagen: "/imagenes/tipos_violencia/economica.png" }
];

// Rutas de atención
const rutasAtencion = [
  { id: 1, nombre: "Policía Nacional", imagen: "/imagenes/entidades_rutas_atencion/policia_nacional.png" },
  { id: 2, nombre: "Medicina Legal", imagen: "/imagenes/entidades_rutas_atencion/medicina_legal.png" },
  { id: 3, nombre: "Fiscalía General de la Nación", imagen: "/imagenes/entidades_rutas_atencion/fiscalia_general.png" },
  { id: 4, nombre: "Defensoría del Pueblo", imagen: "/imagenes/entidades_rutas_atencion/defensoria.png" },
  { id: 5, nombre: "Bienestar Familiar", imagen: "/imagenes/entidades_rutas_atencion/bienestar_familiar.png" },
  { id: 6, nombre: "Línea Púrpura", imagen: "/imagenes/entidades_rutas_atencion/linea_purpura.png" },
  { id: 7, nombre: "ICBF", imagen: "/imagenes/entidades_rutas_atencion/icbf.png" },
  { id: 8, nombre: "Secretaría Distrital de la Mujer", imagen: "/imagenes/entidades_rutas_atencion/secretaria_distrital_mujer.png" },
  { id: 9, nombre: "Casas de Justicia", imagen: "/imagenes/entidades_rutas_atencion/casas_justicia.png" },
  { id: 10, nombre: "Comisarías de Familia", imagen: "/imagenes/entidades_rutas_atencion/comisarias_familia.png" }
];

// Endpoints
app.get('/api/tipos-violencia', (req, res) => {
  res.json(tiposViolencia);
});

app.get('/api/rutas-atencion', (req, res) => {
  res.json(rutasAtencion);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
