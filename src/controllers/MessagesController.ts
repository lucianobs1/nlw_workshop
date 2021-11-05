import { Request, Response } from 'express';

import { MessagesService } from '../services/MessagesService';

class MessageController {
  async create(request: Request, response: Response): Promise<Response> {
    const { admin_id, user_id, text } = request.body;

    try {
      const messageService = new MessagesService();

      const message = await messageService.create({
        admin_id,
        user_id,
        text,
      });

      return response.json(message);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }

  async showByUser(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const messageService = new MessagesService();

    const list = await messageService.listByUser(id);

    return response.json(list);
  }
}

export { MessageController };
