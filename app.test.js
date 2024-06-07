const request = require('supertest');

const app = require('../app'); // Certifique-se de que o caminho esteja correto

describe('Testes de Rotas de snorlax', () => {

it('Deve listar todos os snorlax (GET /snorlax)', async () => {

const response = await request(app).get('/snorlax');

expect(response.statusCode).toEqual(200);

expect(response.body).toBeInstanceOf(Array);

});

it('Deve criar um novo snorlax com campos válidos (POST /contatos)', async () => {

const newsnorlax = {

nome: 'John Doe',

tamanho: '2.1 metros',

peso: '460 kg',

idade: '13 anos',

foto: 'snorlax.jpg',

};

const response = await request(app)

.post('/snorlax')

.send(newsnorlax);

expect(response.statusCode).toEqual(201);

expect(response.body).toHaveProperty('_id');

});

it('Deve retornar erro ao criar um novo snorlax com campos inválidos (POST /snorlax)', async () => {

const invalidSnorlax = {

tamanho: '460 kg',

idade: '13 anos',

foto: 'snorlax.jpg',

};

const response = await request(app)

.post('/snorlax')

.send(invalidSnorlax);

expect(response.statusCode).toEqual(400);

expect(response.body).toHaveProperty('message');

});

it('Deve retornar erro ao acessar uma rota inexistente (GET /rota-inexistente)', async () => {

const response = await request(app).get('/rota-inexistente');

expect(response.statusCode).toEqual(404);

expect(response.body).toHaveProperty('message');

});

});