import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);

  // apply pipe globally to validate every incoming request
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();

// validate data contained in request with Pipes
  // tell nest to use global validation
  // create a class that describes the different properties that the request body should have (referred to as a Data Transfer Object (dto))
  // add validation rules for that class
  // apply that class to the request handler

  // use class transformer to turn the body into a instance of the DTO class
  // use class validator to validate the instance of the DTO
  // if there're any validation errors, respond immediately, otherwise provide body to request handler

// Make sure user is authenticated using Guards
// Route request to a particular function using Controllers
// Run some business logic using Services
// Access the database using Repositories
