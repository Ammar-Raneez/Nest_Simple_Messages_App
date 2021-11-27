import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(
    private readonly messageService: MessagesService
  ) { }

  @Get()
  listMessages() {
    return this.messageService.findAll();
  }

  // method decorator
  @Post()
  // argument decorator - extract body & place it in a body variable
  createMessage(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);
    if (!message) {
      throw new NotFoundException('Message not found');
    }

    return message;
  }
}
