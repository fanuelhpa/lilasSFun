import express from 'express';
import {ClientResource} from '../resources/ClientResource';
import ClientTelephoneController from '../resources/ClientTelephoneResource';
import { ProductCategoryResource } from '../resources/ProductCategoryResource';
import { ProductResource } from '../resources/ProductResource';
import { ClientService } from '../services/ClientService';
import { ClientTelephoneService } from '../services/ClientTelephoneService';
import { ProductCategoryService } from '../services/ProductCategoryService';
import { ProductService } from '../services/ProductService';

//obj para rotas
const router = express();

//instancias de client
const clientService = new ClientService();
const clientController = new ClientResource(clientService);

//instancias de telefone
const clientTelephoneService: ClientTelephoneService = new ClientTelephoneService();
const clientTelephoneController: ClientTelephoneController = new ClientTelephoneController(clientTelephoneService);

//instancias de categoria
const productCategoryService = new ProductCategoryService();
const productCategoryResource = new ProductCategoryResource(productCategoryService);

//instancias de produtos
const productService = new ProductService();
const productController = new ProductResource(productService);

//rotas de cliente
router.get('/client/:id', clientController.findClientById);
router.post('/createClient', clientController.createClient);

//rotas de telephone
router.post('/createClientTelephones',clientTelephoneController.createClientTelephone)

//rotas de categoria
router.post('/createProductsCategories', productCategoryResource.createProductsCategories);

//rotas de produto
router.post('/createProducts',productController.createProducts);

export default router;