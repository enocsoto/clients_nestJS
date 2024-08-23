import { IsInt, IsNotEmpty, IsPositive } from "class-validator";
import { Loan } from "src/loan/entities/loan.entity";
import { ManyToOne } from "typeorm";

export class CreatePaymentDto {
  @IsPositive()
  @IsInt()
  amount: number;

  @IsNotEmpty()
  dueDate: Date;

  @ManyToOne(() => Loan, loan => loan.payments)
  loan: Loan;

}
