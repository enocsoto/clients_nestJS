import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "../../config/entities/base.entity";
import { Loan } from "src/loan/entities/loan.entity";

@Entity({ name: 'payment' }) //pagos
export class Payment extends BaseEntity {

  @Column("integer", { name: "amount" })
  amount: number;

  @Column("timestamp without time zone", { name: "date" })
  dueDate: Date;

  @Column('float', { name: 'ammount_paid' })
  amountPaid: number;

  @ManyToOne(() => Loan, (loan) => loan.payments)
  loan: Loan;

}
