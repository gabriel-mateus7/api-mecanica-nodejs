require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/database');
const clienteRoutes = require('./routes/cliente.routes');
const veiculoRoutes = require('./routes/veiculo.routes');
const servicoRoutes = require('./routes/servico.routes');
const ordemRoutes = require('./routes/ordem.routes');
const mecanicoRoutes = require('./routes/mecanico.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API de Clientes está online!');
});

app.use('/api/clientes', clienteRoutes);
app.use('/api/veiculos', veiculoRoutes);
app.use('/api/servicos', servicoRoutes);
app.use('/api/ordens', ordemRoutes);
app.use('/api/mecanicos', mecanicoRoutes);

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await db.sync();
    console.log('Banco conectado com sucesso.');
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  } catch (error) {
    console.error('Erro ao conectar ao banco:', error);
  }
})();

const Cliente = require('./models/Cliente');

