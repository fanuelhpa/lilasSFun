import express from 'express';
import ClientController from '../controllers/ClientController';
import { UserService } from '../services/ClientService';

//obj para rotas
const router = express();

//inst
const clientService = new UserService();
const clientController = new ClientController(clientService);

router.get('/client/:id', clientController.findClientById);

export default router;