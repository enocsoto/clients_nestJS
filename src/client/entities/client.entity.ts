import { Loan } from "../../loan/entities/loan.entity";
import { BaseEntity } from "../../config/entities/base.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity({ name: 'client' })
export class Client extends BaseEntity {

  @Column("character varying", { name: "name" })
  name: string;

  @Column("character varying", { name: "last_name" })
  lastName: string;

  @Column("integer", { name: "document", unique: true })
  document: number;

  @Column("character varying", { name: "email", unique: true })
  email: string;

  @OneToMany(() => Loan, (loan) => loan.client)
  loans: Loan[];
}
