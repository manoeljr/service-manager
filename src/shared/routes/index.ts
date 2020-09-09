import { Router } from 'express';
import clientsRouter from './clients.routes';
import servicesRouter from './services.routes';
import vehiclesRouter from './vehicles.routes';

const routes = Router();

routes.use('/clients', clientsRouter);
routes.use('/services', servicesRouter);
routes.use('/vehicles', vehiclesRouter);

export default routes;
