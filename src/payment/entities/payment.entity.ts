import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Client } from "../../client/entities/client.entity";
import { Installment } from "../../installment/entities/installment.entity";
import { BaseEntity } from "../../config/entities/base.entity";

@Entity({ name: 'payment' }) //pagos
export class Payment extends BaseEntity {

  @Column("integer", { name: "amount" })
  amount: number;

  @Column("timestamp without time zone", { name: "date" })
  dueDate: Date;

  @ManyToOne(() => Installment, (installment) => installment.payments)
  @JoinColumn([{ name: "installmentId", referencedColumnName: "id" }])
  installment: Installment;

  @ManyToOne(() => Client, (client) => client.payments)
  @JoinColumn([{ name: "clientId", referencedColumnName: "id" }])
  client: Client;

}
