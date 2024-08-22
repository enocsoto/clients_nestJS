import { MigrationInterface, QueryRunner } from "typeorm";

export class DeletedatUpdate1724367905658 implements MigrationInterface {
    name = 'DeletedatUpdate1724367905658'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" ALTER COLUMN "deleted_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "loan" ALTER COLUMN "deleted_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "deleted_at" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payment" ALTER COLUMN "deleted_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "loan" ALTER COLUMN "deleted_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "client" ALTER COLUMN "deleted_at" SET DEFAULT now()`);
    }

}
