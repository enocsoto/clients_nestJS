import { PartialType } from '@nestjs/mapped-types';
import { CreateLoanStatusDto } from './create-loan-status.dto';

export class UpdateLoanStatusDto extends PartialType(CreateLoanStatusDto) {}
