import { Type } from "class-transformer";
import { IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional, ValidateNested } from "class-validator";
import { CreateClientDto } from "src/client/dto/create-client.dto";
import { Client } from "src/client/entities/client.entity";

export class CreateLoanDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsDateString()
  @IsNotEmpty()
  loanDate: Date;

  @IsInt()
  @IsNotEmpty()
  interestRate: number;

  @IsInt()
  @IsNotEmpty()
  installments: number;

  @IsOptional()
  @IsInt()
  document?: number;
}
