import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { PostModule } from './post/post.module';
import { TYPEORM_CONFIG } from './config/constants';
import databaseConfig from './config/database.config';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) =>
                config.get<TypeOrmModuleOptions>(TYPEORM_CONFIG),
        }),
        ConfigModule.forRoot({
            isGlobal: true,
            load: [databaseConfig],
            envFilePath: '.env',
        }),
        PostModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
