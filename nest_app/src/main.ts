import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Додаємо '0.0.0.0', щоб сервер слухав усі мережеві інтерфейси контейнера
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0'); 
  
  // Додатково можна вивести лог, щоб бачити адресу в консолі
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();