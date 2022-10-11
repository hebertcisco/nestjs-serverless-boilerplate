import {
    Module,
} from '@nestjs/common';

import { CatsModule } from '@modules/cats/cats.module';
import { StatusModule } from '@modules/status/status.module';

import { AppController } from './app.controller';

@Module({
    imports: [CatsModule, StatusModule],
    controllers: [AppController],
})
export class AppModule {

}
