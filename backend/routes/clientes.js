// Importa o Express para criar as rotas
const express = require('express');
const router = express.Router();

// ROTA GET - Listar todos os clientes
// Endpoint: GET /clientes
router.get('/', async (req, res) => {
  try {
    // Executa consulta SQL para buscar todos os clientes ordenados por ID
    const result = await req.pool.query('SELECT * FROM clientes ORDER BY id ASC');
    // Retorna os dados em formato JSON
    res.json(result.rows);
  } catch (err) {
    // Se houver erro, retorna status 500 com a mensagem de erro
    res.status(500).json({ error: err.message });
  }
});

// ROTA POST - Criar um novo cliente
// Endpoint: POST /clientes
router.post('/', async (req, res) => {
  // Extrai nome e email do corpo da requisição
  const { nome, email } = req.body;
  try {
    // Executa consulta SQL para inserir novo cliente
    // $1 e $2 são placeholders para os valores (proteção contra SQL injection)
    const result = await req.pool.query(
      'INSERT INTO clientes (nome, email) VALUES ($1, $2) RETURNING *',
      [nome, email]
    );
    // Retorna o cliente criado com status 201 (Created)
    res.status(201).json(result.rows[0]);
  } catch (err) {
    // Se houver erro, retorna status 500 com a mensagem de erro
    res.status(500).json({ error: err.message });
  }
});

// ROTA PUT - Atualizar um cliente existente
// Endpoint: PUT /clientes/:id
router.put('/:id', async (req, res) => {
  // Extrai o ID da URL e os dados do corpo da requisição
  const { id } = req.params;
  const { nome, email } = req.body;
  try {
    // Executa consulta SQL para atualizar o cliente
    const result = await req.pool.query(
      'UPDATE clientes SET nome=$1, email=$2 WHERE id=$3 RETURNING *',
      [nome, email, id]
    );
    // Retorna o cliente atualizado
    res.json(result.rows[0]);
  } catch (err) {
    // Se houver erro, retorna status 500 com a mensagem de erro
    res.status(500).json({ error: err.message });
  }
});

// ROTA DELETE - Deletar um cliente
// Endpoint: DELETE /clientes/:id
router.delete('/:id', async (req, res) => {
  // Extrai o ID da URL
  const { id } = req.params;
  try {
    // Executa consulta SQL para deletar o cliente
    await req.pool.query('DELETE FROM clientes WHERE id=$1', [id]);
    // Retorna mensagem de sucesso
    res.json({ message: 'Cliente deletado' });
  } catch (err) {
    // Se houver erro, retorna status 500 com a mensagem de erro
    res.status(500).json({ error: err.message });
  }
});

// Exporta o router para ser usado no servidor principal
module.exports = router;
