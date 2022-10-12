import { Test, TestingModule } from '@nestjs/testing';
import { StatusService } from '../../../modules/status/status.service';

describe('StatusService', () => {
    let service: StatusService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [StatusService],
        }).compile();

        service = module.get<StatusService>(StatusService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should return status', async () => {
        const status = await service.show();
        expect(status).toBeDefined();
    });
    it('should return status none', async () => {
        const status = await service.show();
        expect(status.status).toBe('none');
    });
});
