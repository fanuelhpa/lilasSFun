import express from 'express';
import ClientController from '../controllers/ClientController';
import { ClientService } from '../services/ClientService';


//obj para rotas
const router = express();

//instancias de client
const clientService = new ClientService();
const clientController = new ClientController(clientService);

//rotas de client
router.get('/client/:id', clientController.findClientById);
router.post('/createClient', clientController.createClient);

export default router;