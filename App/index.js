import express from 'express';

import Database from './Database.js';


export default class App {
    constructor(config) {
        this.port = config.port
        this.express = express();
        this.database = new Database(config.database);
    }

    start() {
        return new Promise((resolve, reject) => {
            this.express.listen(this.port);
            this.database.connect()
                .then(() => resolve())
                .catch(reject);
        });
    }
};
