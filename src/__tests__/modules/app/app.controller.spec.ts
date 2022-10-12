import { AppController } from '../../../modules/app/app.controller';
import { StatusService } from '../../../modules/status/status.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppController', () => {
    let appController: AppController;
    let statusService: StatusService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [StatusService],
        }).compile();

        appController = module.get<AppController>(AppController);
        statusService = module.get<StatusService>(StatusService);
    });

    describe('root', () => {
        it('should return status', async () => {
            const status = await appController.status();
            expect(status).toBeDefined();
        });
        it('should return status none', async () => {
            const status = await appController.status();
            expect(status.status).toBe('none');
        });
    });
});
