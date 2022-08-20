import {MigrationInterface, QueryRunner} from "typeorm";

export class pets1661028080975 implements MigrationInterface {
    name = 'pets1661028080975'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pets" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "animalType" character varying(10) NOT NULL, "animalBreed" character varying(100) NOT NULL, "color" character varying(100) NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_d01e9e7b4ada753c826720bee8b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pets"`);
    }

}
