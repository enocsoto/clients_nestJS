import { IsInt, IsNotEmpty, IsNumber } from "class-validator";

export class CreateLoanDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsInt()
  @IsNotEmpty()
  termInMonths: number;

}
