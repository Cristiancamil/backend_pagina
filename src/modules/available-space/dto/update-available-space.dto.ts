import { PartialType } from '@nestjs/mapped-types';
import { CreateAvailableSpaceDto } from './create-available-space.dto';

export class UpdateAvailableSpaceDto extends PartialType(CreateAvailableSpaceDto) {}
