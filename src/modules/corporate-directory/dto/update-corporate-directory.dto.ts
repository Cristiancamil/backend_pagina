import { PartialType } from '@nestjs/mapped-types';
import { CreateCorporateDirectoryDto } from './create-corporate-directory.dto';

export class UpdateCorporateDirectoryDto extends PartialType(CreateCorporateDirectoryDto) {}
