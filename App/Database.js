import {DataSource} from 'typeorm';
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
            entities: [],
            subscribers: [],
            migrations: [],
        });
    }

    connect() {
        return this.dataSource.initialize();
    }
}
