import { test, expect } from '@playwright/test';

test.describe('Testes de API - JSONPlaceholder', () => {
  
  const baseURL = 'https://jsonplaceholder.typicode.com';

  test('Deve listar os usuários com sucesso (GET)', async ({ request }) => {
    // 1. Disparar a requisição GET
    const response = await request.get(`${baseURL}/users`);
    
    // 2. Validar o Status Code (200 OK)
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    // 3. Validar o payload/corpo da resposta
    const body = await response.json();
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('name');
    expect(body[0]).toHaveProperty('email');
  });

  test('Deve criar um novo usuário com sucesso (POST)', async ({ request }) => {
    const novoUsuario = {
      name: 'Flávio Martins',
      username: 'flvbinho',
      email: 'flavio.martins@teste.com'
    };

    // 1. Disparar a requisição POST enviando os dados no corpo (data)
    const response = await request.post(`${baseURL}/users`, {
      data: novoUsuario
    });

    // 2. Validar o Status Code de criação (201 Created)
    expect(response.status()).toBe(201);

    // 3. Validar os dados retornados pela API
    const body = await response.json();
    expect(body.name).toBe(novoUsuario.name);
    expect(body.email).toBe(novoUsuario.email);
    expect(body).toHaveProperty('id'); // A API deve retornar um ID gerado
  });

});