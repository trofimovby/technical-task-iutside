import {EntitySchema} from 'typeorm';


export const User = new EntitySchema({
    name: 'User',
    tableName: 'users',
    columns: {
        uuid: {
            primary: true,
            type: 'varchar',
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
        },
        email: {
            type: 'varchar',
            length: 100
        },
        password: {
            type: 'varchar',
            length: 100
        },
        nickname: {
            type: 'varchar',
            length: 30
        }
    }
});
