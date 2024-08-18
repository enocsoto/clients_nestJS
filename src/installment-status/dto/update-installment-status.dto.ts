import { PartialType } from '@nestjs/mapped-types';
import { CreateInstallmentStatusDto } from './create-installment-status.dto';

export class UpdateInstallmentStatusDto extends PartialType(CreateInstallmentStatusDto) {}
