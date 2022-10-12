import { Test, TestingModule } from '@nestjs/testing';

import { CatsController } from '../../../modules/cats/cats.controller';
import { CatsService } from '../../../modules/cats/services/cats.service';

describe('CatsController', () => {
    let controller: CatsController;
    let service: CatsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CatsController],
            providers: [CatsService],
        }).compile();

        controller = module.get<CatsController>(CatsController);
        service = module.get<CatsService>(CatsService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
