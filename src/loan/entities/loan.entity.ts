import { BaseEntity } from "../../config/entities/base.entity";
import { Client } from "../../client/entities/client.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Payment } from "src/payment/entities/payment.entity";

@Entity({ name: "loan" }) //prestamos
export class Loan extends BaseEntity {

  @Column('int', { name: "amount" })
  amount: number; //cantidad

  @Column("timestamp with time zone", { name: "loan_date", })
  loanDate: Date; //fecha del prestamo

  @Column('int')
  interestRate: number; //intereses del prestamo

  @Column('int')
  installments: number; //numero de cuotas

  @ManyToOne(() => Client, (client) => client.loans)
  client: Client;

  @OneToMany(() => Payment, (payment) => payment.loan)
  payments: Payment[];

}
