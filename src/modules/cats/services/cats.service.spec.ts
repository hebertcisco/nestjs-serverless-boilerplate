import { Test, TestingModule } from '@nestjs/testing';

import { CatsService } from './cats.service';

describe('CatsService', () => {
    let catsService: CatsService;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                {
                    provide: CatsService,
                    useClass: CatsService,
                },
            ],
        }).compile();

        catsService = module.get<CatsService>(CatsService);
    });

    describe('CatsService methods', () => {
        describe('findAll', () => {
            it('should must return all cats', async () => {
                const result = await catsService.findAll();
                expect(result).toBeInstanceOf(Array);
            });
            it('should must return a promise', async () => {
                const result = catsService.findAll();
                const resolvedResult = await result;
                expect(resolvedResult).toBeDefined();
            });
        });
        describe('create', () => {
            it('should must create a cat', async () => {
                const expectedResult = {
                    name: 'Pereba',
                    age: 3,
                    breed: 'Bombay',
                };
                const result = await catsService.create({
                    ...expectedResult,
                });

                expect(result.name).toBe(expectedResult.name);
                expect(result.age).toBe(expectedResult.age);
                expect(result.breed).toBe(expectedResult.breed);
            });
            it('should must return a promise', async () => {
                const result = catsService.create({
                    name: 'Pereba',
                    age: 3,
                    breed: 'Bombay',
                });
                expect(result).toBeInstanceOf(Promise);
                const resolvedResult = await result;
                expect(resolvedResult).toBeDefined();
                expect(resolvedResult.name).toBe('Pereba');
                expect(resolvedResult.age).toBe(3);
                expect(resolvedResult.breed).toBe('Bombay');
            });
        });
    });
});
