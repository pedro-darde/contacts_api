import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class ContactsTable1638319351803 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "contacts",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "nome",
                    type: "varchar",
                },
                {
                    name: "sobrenome",
                    type: "varchar"
                }, {
                    name: "telefone",
                    type: "varchar"

                }, {
                    name: "dataNascimento",
                    type: "date"
                }, {
                    name: "endereco",
                    type: "varchar"
                }, {
                    name: "email",
                    type: "varchar"
                }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("contacts")
    }

}
