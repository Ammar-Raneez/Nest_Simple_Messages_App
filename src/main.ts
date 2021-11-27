import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

// validate data contained in request with Pipes
// Make sure user is authenticated using Guards
// Route request to a particular function using Controllers
// Run some business logic using Services
// Access the database using Repositories
