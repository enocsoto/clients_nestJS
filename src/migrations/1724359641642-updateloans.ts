import { MigrationInterface, QueryRunner } from "typeorm";

export class Updateloans1724359641642 implements MigrationInterface {
    name = 'Updateloans1724359641642'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "loan" DROP COLUMN "loan_date"`);
        await queryRunner.query(`ALTER TABLE "loan" ADD "loan_date" TIMESTAMP WITH TIME ZONE NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "loan" DROP COLUMN "loan_date"`);
        await queryRunner.query(`ALTER TABLE "loan" ADD "loan_date" TIME WITH TIME ZONE NOT NULL`);
    }

}
