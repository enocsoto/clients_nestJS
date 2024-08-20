import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1724115878415 implements MigrationInterface {
    name = 'Init1724115878415'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "installment_status" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "description" character varying NOT NULL, CONSTRAINT "PK_f5159f9d11faa5b7100c09334f6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "installment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "amount" integer NOT NULL, "dueDate" TIMESTAMP NOT NULL, "installmentStatusId" uuid, "loanId" uuid, CONSTRAINT "PK_c79b5b68e8b6293a0210ce7dbda" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "amount" integer NOT NULL, "date" TIMESTAMP NOT NULL, "installmentId" uuid, "clientId" uuid, CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "name" character varying NOT NULL, "last_name" character varying NOT NULL, "document" integer NOT NULL, "email" character varying NOT NULL, CONSTRAINT "UQ_463cae6774e9b085ca966d89b4f" UNIQUE ("document"), CONSTRAINT "UQ_6436cc6b79593760b9ef921ef12" UNIQUE ("email"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "loan" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "amount" numeric(10,2) NOT NULL, "term_in_months" integer NOT NULL, "client_id" uuid, "loan_status_id" uuid, CONSTRAINT "PK_4ceda725a323d254a5fd48bf95f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "loan_status" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "description" character varying NOT NULL, CONSTRAINT "PK_96fdd831fdc84793047c178f7f9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "installment" ADD CONSTRAINT "FK_35ae49400b95dc55d9f2293a008" FOREIGN KEY ("installmentStatusId") REFERENCES "installment_status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "installment" ADD CONSTRAINT "FK_ad3f1ce44562e50c0de7a6078f8" FOREIGN KEY ("loanId") REFERENCES "loan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment" ADD CONSTRAINT "FK_8b4bec65623802fcd846f69d402" FOREIGN KEY ("installmentId") REFERENCES "installment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment" ADD CONSTRAINT "FK_bbbabef6ffa9572acb68cb0f217" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "loan" ADD CONSTRAINT "FK_89f5277d9f9bc23a78cd22228fa" FOREIGN KEY ("client_id") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "loan" ADD CONSTRAINT "FK_0337017c3973c7cc85fe5f0db9e" FOREIGN KEY ("loan_status_id") REFERENCES "loan_status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "loan" DROP CONSTRAINT "FK_0337017c3973c7cc85fe5f0db9e"`);
        await queryRunner.query(`ALTER TABLE "loan" DROP CONSTRAINT "FK_89f5277d9f9bc23a78cd22228fa"`);
        await queryRunner.query(`ALTER TABLE "payment" DROP CONSTRAINT "FK_bbbabef6ffa9572acb68cb0f217"`);
        await queryRunner.query(`ALTER TABLE "payment" DROP CONSTRAINT "FK_8b4bec65623802fcd846f69d402"`);
        await queryRunner.query(`ALTER TABLE "installment" DROP CONSTRAINT "FK_ad3f1ce44562e50c0de7a6078f8"`);
        await queryRunner.query(`ALTER TABLE "installment" DROP CONSTRAINT "FK_35ae49400b95dc55d9f2293a008"`);
        await queryRunner.query(`DROP TABLE "loan_status"`);
        await queryRunner.query(`DROP TABLE "loan"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "payment"`);
        await queryRunner.query(`DROP TABLE "installment"`);
        await queryRunner.query(`DROP TABLE "installment_status"`);
    }

}
