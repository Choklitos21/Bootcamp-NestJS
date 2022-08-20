import {MigrationInterface, QueryRunner} from "typeorm";

export class pets1661038216310 implements MigrationInterface {
    name = 'pets1661038216310'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."pets_animaltype_enum" RENAME TO "pets_animaltype_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."animalTypeEnum" AS ENUM('cat', 'dog', 'bird', 'other')`);
        await queryRunner.query(`ALTER TABLE "pets" ALTER COLUMN "animalType" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "pets" ALTER COLUMN "animalType" TYPE "public"."animalTypeEnum" USING "animalType"::"text"::"public"."animalTypeEnum"`);
        await queryRunner.query(`ALTER TABLE "pets" ALTER COLUMN "animalType" SET DEFAULT 'other'`);
        await queryRunner.query(`DROP TYPE "public"."pets_animaltype_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."pets_animaltype_enum_old" AS ENUM('cat', 'dog', 'bird', 'other')`);
        await queryRunner.query(`ALTER TABLE "pets" ALTER COLUMN "animalType" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "pets" ALTER COLUMN "animalType" TYPE "public"."pets_animaltype_enum_old" USING "animalType"::"text"::"public"."pets_animaltype_enum_old"`);
        await queryRunner.query(`ALTER TABLE "pets" ALTER COLUMN "animalType" SET DEFAULT 'other'`);
        await queryRunner.query(`DROP TYPE "public"."animalTypeEnum"`);
        await queryRunner.query(`ALTER TYPE "public"."pets_animaltype_enum_old" RENAME TO "pets_animaltype_enum"`);
    }

}
