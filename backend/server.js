// Importa as bibliotecas necessárias para criar o servidor
const express = require('express');        // Framework web para Node.js
const cors = require('cors');             // Permite requisições de diferentes origens
const pool = require('./db');             // Conexão com o banco de dados
const clientesRoutes = require('./routes/clientes'); // Rotas para operações com clientes

// Cria a aplicação Express
const app = express();

// Configuração CORS para permitir requisições de qualquer origem
// Isso é necessário para que o frontend possa se comunicar com o backend
app.use(cors({
  origin: '*',                                    // Aceita requisições de qualquer site
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization']     // Cabeçalhos permitidos
}));

// Middleware para processar dados JSON nas requisições
app.use(express.json());

// Testa a conexão com o banco de dados
pool.connect()
  .then(() => console.log('Conectado ao PostgreSQL com sucesso'))
  .catch(err => console.error('Erro ao conectar no PostgreSQL:', err));

// Configura as rotas para clientes
// Adiciona o pool de conexão do banco em cada requisição
app.use('/clientes', (req, res, next) => {
  req.pool = pool; // Disponibiliza a conexão do banco para as rotas
  next();          // Continua para a próxima função
}, clientesRoutes);

// Define a porta do servidor
const PORT = 5000;

// Inicia o servidor na porta 5000, aceitando conexões de qualquer IP
app.listen(PORT, '0.0.0.0', () => 
  console.log(`Servidor rodando na porta ${PORT} e aceitando conexões externas`)
);

