// External modules
import { Router } from 'express';

// Internal modules
import authRoutes from '../auth/auth.route';
import userRoutes from '../user/user.route';

const routes = Router();

routes.use('/auth', authRoutes);
routes.use('/user', userRoutes);

export default routes;
