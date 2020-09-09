import { Router } from 'express';

const clientsRouter = Router();

clientsRouter.get('/', (request, response) => {
    return response.send({ message: 'Pagina de clientes' });
});

export default clientsRouter;
