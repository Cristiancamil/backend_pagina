import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateWeeklyPriceDto {
    @IsString()
    marketOne: string

    @IsString()
    marketTow: string

    @IsString()
    marketThree: string
}
