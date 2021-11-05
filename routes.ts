import { Router } from 'express';

import { SettingsController } from './src/controllers/SettingsController';
import { UsersController } from './src/controllers/UserController';

const routes = Router();

routes.post('/settings', new SettingsController().create);
routes.post('/users', new UsersController().create);

export { routes };
