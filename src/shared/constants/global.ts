import { configService } from 'nest-shared';

export const APP_SECRET: string = configService.getValue('APP_SECRET');
