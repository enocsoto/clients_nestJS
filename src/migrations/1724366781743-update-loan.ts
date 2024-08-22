import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateLoan1724366781743 implements MigrationInterface {
    name = 'UpdateLoan1724366781743'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "loan" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "loan" ADD "amount" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "loan" DROP COLUMN "interest_rate"`);
        await queryRunner.query(`ALTER TABLE "loan" ADD "interest_rate" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "loan" DROP COLUMN "interest_rate"`);
        await queryRunner.query(`ALTER TABLE "loan" ADD "interest_rate" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "loan" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "loan" ADD "amount" numeric(10,2) NOT NULL`);
    }

}
