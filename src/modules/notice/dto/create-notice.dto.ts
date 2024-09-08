import { IsString } from "class-validator";

export class CreateNoticeDto {
    
    @IsString()
    title: string;

    @IsString()
    resumen: string;

    @IsString()
    picture: string;
}
