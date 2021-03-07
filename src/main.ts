import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    /* 
      I'm not sure why the code below didn't work, but I didn't want to get bogged down 
      on this so I've commented it out for now to allow API calls to work
    */
    // origin: process.env.CORS,
    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    // preflightContinue: false,
    // optionsSuccessStatus: 204,
  });
  await app.listen(3001);
}
bootstrap();
