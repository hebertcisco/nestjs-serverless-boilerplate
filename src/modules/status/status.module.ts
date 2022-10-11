import { Module } from '@nestjs/common';

import { StatusService } from './status.service';
import { StatusServiceMock } from './tests/mocks/status.service.mock';

import { configService } from 'nest-shared';

@Module({
    providers: [
        {
            provide: StatusService,
            useClass: configService.isProduction()
                ? StatusService
                : StatusServiceMock,
        },
    ],
    exports: [
        {
            provide: StatusService,
            useClass: configService.isProduction()
                ? StatusService
                : StatusServiceMock,
        },
    ],
})
export class StatusModule { }
