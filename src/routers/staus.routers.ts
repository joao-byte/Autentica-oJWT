
import express from 'express';
import statusRoute from './users.route';
import usersRoute from './users.route';

const app = express();

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurações de Rotas
app.use(statusRoute);
app.use(usersRoute);

// Inicialização do servidor
app.listen(3000, () => {
  console.log('Aplicação executando na porta 3000!');
});


export default statusRoute;