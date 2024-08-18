import { Loan } from "../../loan/entities/loan.entity";
import { BaseEntity } from "../../config/entities/base.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity({ name: 'loan_status' })
export class LoanStatus extends BaseEntity {

  @Column("character varying", { name: "description" })
  description: string;

  @OneToMany(() => Loan, (loan) => loan.loanStatus)
  loans: Loan[];
}
