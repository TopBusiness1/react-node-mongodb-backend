"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
exports.addSwagger = app => {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Case Tracker Api')
        .setDescription('Case Tracker related APIs')
        .setVersion('1.0')
        .addTag('users')
        .addTag('contacts')
        .addTag('medical')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('/api/swagger', app, document);
    return app;
};
//# sourceMappingURL=add-swagger.js.map