🛠️ API de Mecânica em Node.js
📋 Descrição
Projeto de desenvolvimento de uma API RESTful utilizando Node.js e MySQL, com o tema de uma mecânica. O sistema permite a realização de operações como criação, leitura, atualização e exclusão (CRUD) de dados no banco, facilitando o gerenciamento de informações relacionadas à oficina.

🚀 Tecnologias Utilizadas
Node.js

Express

MySQL

Sequelize (se aplicável)

Postman (para testes)

⚙️ Como executar o projeto
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/gabriel-mateus7/api-mecanica-nodejs.git
Instale as dependências:

bash
Copiar
Editar
npm install
Configure o banco de dados:

Crie um banco de dados MySQL.

Configure as credenciais no arquivo .env:

env
Copiar
Editar
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
Execute as migrações (se aplicável):

bash
Copiar
Editar
npx sequelize-cli db:migrate
Inicie o servidor:

bash
Copiar
Editar
npm start
📮 Testes
Utilize o Postman para realizar requisições HTTP e testar os endpoints da API.

📂 Estrutura de Pastas
bash
Copiar
Editar
.
├── config/          # Configurações de banco de dados
├── controllers/     # Lógica de negócios
├── models/          # Modelos do banco de dados
├── routes/          # Definição das rotas
├── app.js           # Arquivo principal
├── .env             # Variáveis de ambiente (não subir para o Git!)
├── package.json     # Dependências e scripts
✅ Funcionalidades
 CRUD de entidades

 Integração com MySQL

 Estrutura modularizada

 Testes com Postman

✍️ Autores
Gabriel Mateus
github.com/gabriel-mateus7

Enzo Arthur
github.com/EnzoArthurBraz

