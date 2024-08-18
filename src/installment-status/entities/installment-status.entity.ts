import { BaseEntity } from "../../config/entities/base.entity";
import { Installment } from "../../installment/entities/installment.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity({ name: "installment_status" })
export class InstallmentStatus extends BaseEntity {

  @Column("character varying", { name: "description" })
  description: string;

  @OneToMany(() => Installment, (installment) => installment.installmentStatus)
  installments: Installment[];

}
