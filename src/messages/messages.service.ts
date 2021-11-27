import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

@Injectable()
export class MessagesService {
  constructor(
    private readonly messagesRepository: MessagesRepository
  ) { }

  async findOne(id: string) {
    return await this.messagesRepository.findOne(id);
  }

  async findAll() {
    return await this.messagesRepository.findAll();
  }

  async create(message: string) {
    return await this.messagesRepository.create(message);
  }
}