import { OmitType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';
import { IsEmail, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateLoanDto } from 'src/loan/dto/create-loan.dto';

export class UpdateClientDto extends OmitType(CreateClientDto, ['name', 'lastName', 'loans', 'document']) {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateLoanDto)
  loans?: CreateLoanDto[];

}
