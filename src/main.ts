import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { log } from 'console';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;
  log('Listen on port', port)
  await app.listen(port);
}
bootstrap();
