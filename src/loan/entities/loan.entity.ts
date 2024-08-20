import { BaseEntity } from "../../config/entities/base.entity";
import { Client } from "../../client/entities/client.entity";
import { Installment } from "../../installment/entities/installment.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity({ name: "loan" })
export class Loan extends BaseEntity {

  @Column("decimal", { name: "amount", precision: 10, scale: 2 })
  amount: number; //cantidad

  @Column("integer", { name: "term_in_months" })
  termInMonths: number;

  @ManyToOne(() => Client, (client) => client.loans)
  client: Client;

  @OneToMany(() => Installment, (installment) => installment.loan)
  installments: Installment[]; //cuotas
}
