import { PartialType } from '@nestjs/mapped-types';
import { CreateWeeklyPriceDto } from './create-weekly-price.dto';

export class UpdateWeeklyPriceDto extends PartialType(CreateWeeklyPriceDto) {}
