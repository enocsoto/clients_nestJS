import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1724187219824 implements MigrationInterface {
    name = 'Init1724187219824'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "name" character varying NOT NULL, "last_name" character varying NOT NULL, "document" integer NOT NULL, "email" character varying NOT NULL, CONSTRAINT "UQ_463cae6774e9b085ca966d89b4f" UNIQUE ("document"), CONSTRAINT "UQ_6436cc6b79593760b9ef921ef12" UNIQUE ("email"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "loan" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "amount" numeric(10,2) NOT NULL, "loan_date" TIME WITH TIME ZONE NOT NULL, "interest_rate" double precision NOT NULL, "installments" integer NOT NULL, "client_id" uuid, CONSTRAINT "PK_4ceda725a323d254a5fd48bf95f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "amount" integer NOT NULL, "date" TIMESTAMP NOT NULL, "ammount_paid" double precision NOT NULL, "loan_id" uuid, CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "loan" ADD CONSTRAINT "FK_89f5277d9f9bc23a78cd22228fa" FOREIGN KEY ("client_id") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment" ADD CONSTRAINT "FK_0202d49c491e0181a0e7212dc15" FOREIGN KEY ("loan_id") REFERENCES "loan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payment" DROP CONSTRAINT "FK_0202d49c491e0181a0e7212dc15"`);
        await queryRunner.query(`ALTER TABLE "loan" DROP CONSTRAINT "FK_89f5277d9f9bc23a78cd22228fa"`);
        await queryRunner.query(`DROP TABLE "payment"`);
        await queryRunner.query(`DROP TABLE "loan"`);
        await queryRunner.query(`DROP TABLE "client"`);
    }

}
