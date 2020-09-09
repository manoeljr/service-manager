import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from 'typeorm';

export default class CreateVehicles1599524277205 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'vehicles',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'type',
                        type: 'varchar',
                    },
                    {
                        name: 'manufacturer',
                        type: 'varchar',
                    },
                    {
                        name: 'model',
                        type: 'varchar',
                    },
                    {
                        name: 'plate',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'color',
                        type: 'varchar',
                    },
                    {
                        name: 'client_id',
                        type: 'uuid',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
                foreignKeys: [
                    {
                        name: 'foreignClient',
                        columnNames: ['client_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'clients',
                        onDelete: 'SET NULL',
                        onUpdate: 'CASCADE',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('vehicles');
    }
}
