import express from 'express';
import ClientController from '../resources/ClientController';
import ClientTelephoneController from '../resources/ClientTelephoneController';


import { ClientService } from '../services/ClientService';
import { ClientTelephoneService } from '../services/ClientTelephoneService';


//obj para rotas
const router = express();

//instancias de client
const clientService = new ClientService();
const clientController = new ClientController(clientService);

//instancias de telefone
const clientTelephoneService: ClientTelephoneService = new ClientTelephoneService();
const clientTelephoneController: ClientTelephoneController = new ClientTelephoneController(clientTelephoneService);

//rotas de client
router.get('/client/:id', clientController.findClientById);
router.post('/createClient', clientController.createClient);

//rotas de telephone
router.post('/createClientTelephones',clientTelephoneController.createClientTelephone)

export default router;