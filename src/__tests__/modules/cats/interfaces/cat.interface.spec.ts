import { Cat } from '../../../../modules/cats/interfaces/cat.interface';

describe('Cat', () => {
    class CatImpl implements Cat {
        name: string;
        age: number;
        breed: string;
    }

    it('should be defined', () => {
        expect(new CatImpl()).toBeDefined();
    });

    it('should have name, age, and breed properties', () => {
        const cat = new CatImpl();
        cat.name = 'Fluffy';
        cat.age = 3;
        cat.breed = 'Persian';

        expect(cat.name).toEqual('Fluffy');
        expect(cat.age).toEqual(3);
        expect(cat.breed).toEqual('Persian');
    });
});
