import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.enableCors({
    origin: '*',
  });
  await app.listen(3200);
}
bootstrap();
