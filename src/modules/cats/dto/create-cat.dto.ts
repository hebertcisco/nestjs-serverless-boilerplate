import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { Cat } from '../../cats/interfaces/cat.interface';

export class CreateCatDto implements Cat {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    age: number;

    @IsString()
    @IsNotEmpty()
    breed: string;
}
