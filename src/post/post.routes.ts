import { Router } from 'express';
import upload from '../config/multer.config'
// Internal modules
import postController from './post.controller'
/* import authMiddleware from '../auth/middlewares/auth.middleware'; */

const routes = Router();

routes.get('/', postController.findAll);
routes.get('/:id', postController.findById); 
routes.post('/', postController.create);
routes.delete('/:id', postController.delete);
routes.put('/:id', postController.update);

export default routes;
/* upload.single('image'), */ 