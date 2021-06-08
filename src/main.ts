import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';
import { SERVER_PORT } from './config/constants';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const logger = new Logger();

    const config = app.get(ConfigService);
    const port = parseInt(config.get<string>(SERVER_PORT), 10) || 3000;

    app.setGlobalPrefix('api');

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
        }),
    );

    await app.listen(port, '0.0.0.0');
    logger.log(`Server is running in ${await app.getUrl()}`);
}
bootstrap();
