import { Type } from "class-transformer";
import { IsString, IsNotEmpty, IsInt, IsEmail, ValidateNested, IsOptional, MinLength } from "class-validator";
import { CreateLoanDto } from "src/loan/dto/create-loan.dto";

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  readonly lastName: string;

  @IsInt()
  @IsNotEmpty()
  readonly document: number;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateLoanDto)
  loans?: CreateLoanDto[];
}
