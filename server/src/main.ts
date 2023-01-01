import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
const start = async () => {
    try {
        const PORT = process.env.PORT ||3500;  // input porst
        const app = await NestFactory.create(AppModule);
        app.enableCors()        
        // app.setGlobalPrefix('api');
        // app.useGlobalPipes(new ValidationPipe());
        const config = new DocumentBuilder()
        .setTitle('Warranty card digitizing system')
        .setDescription('Documentation API ')
        .setVersion('1.0')
        .build();
      const document = SwaggerModule.createDocument(app, config);
      SwaggerModule.setup('api/docs', app, document);
    
        await app.listen(PORT, () => console.log('server started on PORT - '+ PORT ))
    } catch (e) {
        console.log(e)
    }
}

start()

