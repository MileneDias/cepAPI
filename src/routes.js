import { Router } from 'express';

import logRequestsMiddleware from './app/middlewares/logRequests';

import cepController from './app/controllers/cepController'; 

const routes = new Router();

routes.use(logRequestsMiddleware);

//busca cep exato
routes.get('/cep/:cep', cepController.show);

//busca cep por UF + cidade + nome da rua
routes.get('/cep', cepController.query);

export default routes;
