import express from 'express';


export default class App {
    constructor(config) {
        this.port = config.port
        this.express = express();
    }

    start() {
        return new Promise((resolve, reject) => {
            this.express.listen(this.port);
            resolve();
        });
    }
};
