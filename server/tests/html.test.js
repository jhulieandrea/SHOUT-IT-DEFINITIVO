const fs = require('fs');
const path = require('path');

describe('Verificación de archivos HTML del proyecto SHOUT IT', () => {
  const htmlDir = path.join(__dirname, '../../html');

  const expectedFiles = [
    'pantalla_principal.html',
    'tipos_de_violencia.html',
    'rutas_atencion.html',
    'violencia_fisica.html',
    'violencia_psicologica.html',
    'violencia_genero.html',
    'violencia_sexual.html',
    'violencia_economica.html',
    'ruta_policia_nacional.html',
    'fiscalia_general.html',
    'medicina_legal.html',
    'defensoria.html',
    'icbf.html',
    'linea_purpura.html',
    'casas_justicia.html',
    'comisarias_familia.html',
    'secretaria_distrital_mujer.html'
  ];

  test('Todos los archivos HTML esperados existen', () => {
    expectedFiles.forEach(file => {
      const filePath = path.join(htmlDir, file);
      const exists = fs.existsSync(filePath);
      expect(exists).toBe(true);
    });
  });
});
