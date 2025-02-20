import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('Starting NestJS application...');
  await app.listen(process.env.PORT ?? 3000);
  console.log(`NestJS application started on port ${process.env.PORT ?? 3000}`);
}
bootstrap();
