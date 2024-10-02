import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateWeeklyPriceDto {

    @IsString()
    @IsOptional()
    kilogram?: string
    
    @IsString()
    @IsOptional()
    variation?: string

    @IsString()
    @IsOptional()
    previous_week_day?: string

    @IsString()
    @IsOptional()
    current_weekday?: string
}
