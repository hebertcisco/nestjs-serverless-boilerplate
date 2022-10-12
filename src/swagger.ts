#!/usr/bin/env node
import 'reflect-metadata';
import 'dotenv/config';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { NestFactory } from '@nestjs/core';

import type { INestApplication } from '@nestjs/common';

import * as pkg from '../package.json';
import { PORT } from './shared/constants/global';
import { AppModule } from './modules/app/app.module';

async function bootstrap(): Promise<void> {
    const app: INestApplication = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
        .setTitle(pkg.name)
        .setDescription(pkg.description)
        .setVersion(pkg.version)
        .setTitle(pkg.name)
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-docs', app, document);
    await app.listen(PORT + 1);
}

(async (): Promise<void> => {
    await bootstrap();
})();
