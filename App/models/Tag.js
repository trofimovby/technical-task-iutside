import {EntitySchema} from 'typeorm';


export const Tag = new EntitySchema({
    name: 'Tag',
    tableName: 'tags',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        name: {
            type: 'varchar',
            length: 40
        },
        softOrder: {
            type: 'integer',
            default: 0
        }
    },
    relations:{
        creator: {
            type: 'one-to-many',
            target: 'User'
        },
    }
});
