import { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";



export function setupSwagger(app:NestExpressApplication) {
    const config = new DocumentBuilder()
        .setTitle('E-commerce Backend APIs')
        .setDescription("APIs for E-commerce application")
        .setVersion('1.0')
        .addTag('APIs')
        .build();

    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("/api/docs", app, documentFactory);

}

