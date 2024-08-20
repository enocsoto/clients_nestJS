import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsNumber, IsOptional, ValidateNested } from "class-validator";
import { CreatePaymentDto } from "src/payment/dto/create-payment.dto";

export class CreateLoanDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsInt()
  @IsNotEmpty()
  termInMonths: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreatePaymentDto)
  initialPayment?: CreatePaymentDto;
}
