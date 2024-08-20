import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Payment } from "../../payment/entities/payment.entity";
import { InstallmentStatus } from "../../installment-status/entities/installment-status.entity";
import { BaseEntity } from "../../config/entities/base.entity";
import { Loan } from "../../loan/entities/loan.entity";

@Entity({ name: 'installment' }) //cuotas
export class Installment extends BaseEntity {

  @Column("integer", { name: "amount" })
  amount: number; //cantidad

  @Column("timestamp without time zone", { name: "dueDate" })
  dueDate: Date; //fecha de cuota

  @ManyToOne(
    () => InstallmentStatus,
    (installment_status) => installment_status.installments
  )
  @JoinColumn([{ name: "installmentStatusId", referencedColumnName: "id" }])
  installmentStatus: InstallmentStatus;

  @ManyToOne(() => Loan, (loan) => loan.installments)
  @JoinColumn([{ name: "loanId", referencedColumnName: "id" }])
  loan: Loan;

  @OneToMany(() => Payment, (payment) => payment.installment)
  payments: Payment;

}
