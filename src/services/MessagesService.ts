import { getCustomRepository, Repository } from 'typeorm';

import { Message } from '../entities/Message';
import { MessagesRepository } from '../repositories/MessagesRepository';

interface IMessageCreate {
  admin_id?: string;
  text: string;
  user_id: string;
}

class MessagesService {
  private messageRepository: Repository<Message>;

  constructor() {
    this.messageRepository = getCustomRepository(MessagesRepository);
  }

  async create({ admin_id, user_id, text }: IMessageCreate): Promise<Message> {
    const messagesRepository = this.messageRepository;

    const message = messagesRepository.create({
      admin_id,
      user_id,
      text,
    });

    await messagesRepository.save(message);

    return message;
  }

  async listByUser(user_id: string): Promise<Message[]> {
    const messagesRepository = this.messageRepository;

    const list = await messagesRepository.find({
      where: { user_id },
      relations: ['user'],
    });

    return list;
  }
}

export { MessagesService };
