const request = require('supertest');
const app = require('../server');

describe('Pruebas API SHOUT IT', () => {
  test('GET /api/tipos-violencia devuelve 200 y un arreglo', async () => {
    const res = await request(app).get('/api/tipos-violencia');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('GET /api/rutas-atencion devuelve 200 y un arreglo', async () => {
    const res = await request(app).get('/api/rutas-atencion');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
