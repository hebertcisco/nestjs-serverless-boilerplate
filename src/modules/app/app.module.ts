import { Module } from '@nestjs/common';

import { CatsModule } from '../cats/cats.module';
import { StatusModule } from '../status/status.module';

import { AppController } from './app.controller';

@Module({
    imports: [CatsModule, StatusModule],
    controllers: [AppController],
})
export class AppModule {}
