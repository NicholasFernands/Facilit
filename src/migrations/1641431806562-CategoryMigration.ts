import {MigrationInterface, QueryRunner} from "typeorm";

export class CategoryMigration1641431806562 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE "category" RENAME COLUMN "name" TO "title"`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE "post" RENAME COLUMN "title" TO "name"`)
    }

}
