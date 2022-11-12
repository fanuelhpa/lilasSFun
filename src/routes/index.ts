import express from 'express';
import { AddressResource } from '../resources/AddressResource';
import { CityResource } from '../resources/CityResource';
import {ClientResource} from '../resources/ClientResource';
import {ClientTelephoneResource} from '../resources/ClientTelephoneResource';
import { ProductCategoryResource } from '../resources/ProductCategoryResource';
import { ProductResource } from '../resources/ProductResource';
import { StateResource } from '../resources/StateResource';
import { AddressService } from '../services/AddressService';
import { CityService } from '../services/CityService';
import { ClientService } from '../services/ClientService';
import { ClientTelephoneService } from '../services/ClientTelephoneService';
import { ProductCategoryService } from '../services/ProductCategoryService';
import { ProductService } from '../services/ProductService';
import { StateService } from '../services/StateService';

//obj para rotas
const router = express();

//instancias de client
const clientService = new ClientService();
const clientResource = new ClientResource(clientService);

//instancias de telefone
const clientTelephoneService: ClientTelephoneService = new ClientTelephoneService();
const clientTelephoneResource: ClientTelephoneResource = new ClientTelephoneResource(clientTelephoneService);

//instancias de categoria
const productCategoryService = new ProductCategoryService();
const productCategoryResource = new ProductCategoryResource(productCategoryService);

//instancias de produtos
const productService = new ProductService();
const productController = new ProductResource(productService);

//instancias de endereço
const addressService = new AddressService();
const addressResource = new AddressResource(addressService);

//instancias de cidade
const cityService = new CityService();
const cityResource = new CityResource(cityService);

//instancias de estado
const stateService = new StateService();
const stateResource = new StateResource(stateService);

//rotas de clientes
router.get('/client/:id', clientResource.findClientById);
router.post('/createClient', clientResource.createClient)

//rotas de telephone
router.post('/createClientTelephone',clientTelephoneResource.createClientTelephone)

//rotas de categoria de produtos
router.post('/createProductsCategories', productCategoryResource.createProductsCategories);

//rotas de produto
router.post('/createProducts',productController.createProducts);

//rotas de endereço
router.post('/createAdresses', addressResource.createAdresses);

//rotas de cidade
router.post('/createCities', cityResource.createCities);

//rotas de estado
router.post('/createStates', stateResource.createStates);

export default router;