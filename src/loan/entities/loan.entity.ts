import { BaseEntity } from "../../config/entities/base.entity";
import { Client } from "../../client/entities/client.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Payment } from "src/payment/entities/payment.entity";

@Entity({ name: "loan" }) //prestamos
export class Loan extends BaseEntity {

  @Column("decimal", { name: "amount", precision: 10, scale: 2 })
  amount: number; //cantidad

  @Column("time with time zone", { name: "loan_date", })
  loanDate: Date; //fecha del prestamo

  @Column('float')
  interestRate: number; //intereses del prestamo

  @Column('int')
  installments: number; //numero de cuotas

  @Column("integer", { name: "term_in_months" })
  termInMonths: number; //meses

  @ManyToOne(() => Client, (client) => client.loans)
  client: Client;

  @OneToMany(() => Payment, (payment) => payment.loan)
  payments: Payment[];

}
