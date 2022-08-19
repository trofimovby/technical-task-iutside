import {EntitySchema} from 'typeorm';


export const UserTag = new EntitySchema({
    name: 'UserTag',
    tableName: 'usertags',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        }
    },
    relations: {
        user: {
            type: 'many-to-one',
            target: 'User'
        },
        tag: {
            type: 'many-to-one',
            target: 'Tag'
        }
    }
});
