// External modules
import { Router } from 'express';

// Internal modules
import userController from './user.controller';
import authMiddleware from '../auth/middlewares/auth.middleware';

const routes = Router();

routes.get('/', userController.findAll);
routes.get('/:id', userController.findById);
routes.get('/email/:email', authMiddleware, userController.findByEmail);
routes.get('/drunks', userController.findTopDrunks);
routes.post('/', authMiddleware, userController.create);
routes.put('/:id', authMiddleware, userController.update);
routes.delete('/:id', authMiddleware, userController.delete);

export default routes;