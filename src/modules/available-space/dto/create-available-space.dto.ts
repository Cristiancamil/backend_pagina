import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateAvailableSpaceDto {
    @IsString()
    @IsOptional()
    store?: string
    
    @IsString()
    @IsOptional()
    local?: string

    @IsString()
    @IsOptional()
    area_m2?: string

    @IsString()
    @IsOptional()
    sector?: string
}
