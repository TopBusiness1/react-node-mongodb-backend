import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const addSwagger = app => {
  const options = new DocumentBuilder()
    .setTitle('Case Tracker Api')
    .setDescription('Case Tracker related APIs')
    .setVersion('1.0')
    .addTag('users')
    .addTag('contacts')
    .addTag('medical')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/swagger', app, document);
  return app;
};
