import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import mainRoutes from './routes/index';

//informa à aplicação o conteudo de .env (variáveis de ambiente)
dotenv.config();

//Cria uma instancia express para o servidor
const server = express();

//define a pasta de arquivos estáticos
server.use(express.static(path.join(__dirname,'../public')));

server.use(express.json());

//rotas
//define as rotas principais (index.ts)
server.use(mainRoutes);

//rota para pagina não encontrada
server.use((req, res) =>{
    res.send("Página não encontrada")
}) 

//inicia o servidor
server.listen(process.env.PORT);