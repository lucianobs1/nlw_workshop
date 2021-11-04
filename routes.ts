import { Router } from 'express';

import { SettingsController } from './src/controllers/SettingsController';

const routes = Router();

routes.post('/settings', new SettingsController().create);

export { routes };
