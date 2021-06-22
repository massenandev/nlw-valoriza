import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1624398737685 implements MigrationInterface {

  //fazer a migration - criação da tabela
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "name",
            type: "varchar"
          },
          {
            name: "email",
            type: "varchar"
          },
          {
            name: "admin",
            type: "boolean",
            default: false
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()"
          }
        ]
      })
    )
  }

  //desfazer a migration - remover a tabela
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users")
  }
  
}
