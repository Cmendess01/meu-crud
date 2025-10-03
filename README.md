# CRUD Cadu - Sistema de Gerenciamento de Clientes

Um sistema completo de CRUD (Create, Read, Update, Delete) para gerenciamento de clientes, desenvolvido com Node.js, React e PostgreSQL.

## 🚀 Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **PostgreSQL** - Banco de dados
- **CORS** - Middleware para requisições cross-origin

### Frontend
- **React** - Biblioteca para interface de usuário
- **CSS3** - Estilização moderna e responsiva
- **Fetch API** - Comunicação com o backend

## 📋 Funcionalidades

- ✅ **Listar clientes** - Visualizar todos os clientes cadastrados
- ✅ **Adicionar cliente** - Cadastrar novos clientes
- ✅ **Editar cliente** - Atualizar informações existentes
- ✅ **Deletar cliente** - Remover clientes do sistema
- ✅ **Interface responsiva** - Funciona em desktop e mobile
- ✅ **Validação de formulários** - Campos obrigatórios e validação de email
- ✅ **Confirmação de exclusão** - Proteção contra exclusões acidentais

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js (versão 14 ou superior)
- PostgreSQL (versão 12 ou superior)
- Git

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/meu-crud.git
cd meu-crud
```

### 2. Configure o banco de dados
```sql
-- Conecte ao PostgreSQL e execute:
CREATE USER cadu WITH PASSWORD '1234';
CREATE DATABASE crud_db OWNER cadu;

-- Conecte ao banco crud_db e execute:
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3. Configure o backend
```bash
cd backend
npm install
```

### 4. Configure o frontend
```bash
cd ../frontend
npm install
```

### 5. Inicie os serviços

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

## 🌐 Acesso

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Banco de dados**: localhost:5433

## 📁 Estrutura do Projeto

```
meu-crud/
├── backend/
│   ├── routes/
│   │   └── clientes.js    # Rotas da API
│   ├── db.js              # Configuração do banco
│   ├── server.js          # Servidor principal
│   └── package.json       # Dependências do backend
├── frontend/
│   ├── src/
│   │   ├── App.js         # Componente principal
│   │   ├── App.css        # Estilos do componente
│   │   ├── api.js         # Configuração da API
│   │   ├── index.js       # Ponto de entrada
│   │   └── index.css      # Estilos globais
│   └── package.json       # Dependências do frontend
└── README.md              # Este arquivo
```

## 🔧 Configuração para Acesso Externo

Para acessar o sistema de outras máquinas na rede:

1. **Atualize a URL da API** no arquivo `frontend/src/api.js`:
```javascript
const API_URL = 'http://SEU_IP:5000';
```

2. **Configure o firewall** (se necessário):
```bash
sudo ufw allow 3000
sudo ufw allow 5000
```

## 📝 API Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/clientes` | Lista todos os clientes |
| POST | `/clientes` | Cria um novo cliente |
| PUT | `/clientes/:id` | Atualiza um cliente |
| DELETE | `/clientes/:id` | Remove um cliente |

### Exemplo de uso da API

**Criar cliente:**
```bash
curl -X POST http://localhost:5000/clientes \
  -H "Content-Type: application/json" \
  -d '{"nome":"João Silva","email":"joao@email.com"}'
```

**Listar clientes:**
```bash
curl http://localhost:5000/clientes
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Cadu** - Desenvolvedor Full Stack

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
