import { Router } from 'express';

import { MessageController } from './src/controllers/MessagesController';
import { SettingsController } from './src/controllers/SettingsController';
import { UsersController } from './src/controllers/UserController';

const routes = Router();

routes.post('/settings', new SettingsController().create);
routes.post('/settings/:username', new SettingsController().findByUsername);
routes.put('/settings/:username', new SettingsController().update);

routes.post('/users', new UsersController().create);

routes.post('/messages', new MessageController().create);
routes.get('/messages/:id', new MessageController().showByUser);

export { routes };
