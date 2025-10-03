// Importa a biblioteca pg para conectar com PostgreSQL
const { Pool } = require('pg');

// Configura a conexão com o banco de dados PostgreSQL
const pool = new Pool({
  user: 'cadu',        // Nome do usuário do banco
  host: 'localhost',   // Endereço do servidor (local)
  database: 'crud_db', // Nome do banco de dados
  password: '1234',    // Senha do usuário
  port: 5433,          // Porta do PostgreSQL
});

// Exporta o pool de conexões para ser usado em outros arquivos
module.exports = pool;

