"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const add_swagger_1 = require("./add-swagger");
const common_1 = require("@nestjs/common");
const fmp = require("fastify-multipart");
const platform_fastify_1 = require("@nestjs/platform-fastify");
require("reflect-metadata");
async function bootstrap() {
    const fastifyAdapter = new platform_fastify_1.FastifyAdapter();
    fastifyAdapter.register(fmp, {
        limits: {
            fieldNameSize: 100,
            fieldSize: 1000000,
            fields: 10,
            fileSize: 100,
            files: 1,
            headerPairs: 2000,
        },
    });
    let app = await core_1.NestFactory.create(app_module_1.AppModule, fastifyAdapter);
    app = add_swagger_1.addSwagger(app);
    app.enableCors();
    app.setGlobalPrefix('/api');
    const logger = new common_1.Logger();
    await app.listen(5000, () => {
        logger.log(`Listening on port 5000`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map