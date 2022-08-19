import {DataSource} from 'typeorm';

import {User} from './models/User.js';
import {Tag} from './models/Tag.js';
import {UserTag} from './models/UserTag.js';


export default class Database {
    constructor(config) {
        this.dataSource = new DataSource({
            type: 'postgres',
            host: config.host,
            port: config.port,
            username: config.username,
            password: config.password,
            database: config.name,
            synchronize: true,
            logging: true,
            entities: [User, Tag, UserTag],
            subscribers: [],
            migrations: [],
        });
    }

    connect() {
        return this.dataSource.initialize();
    }
}
