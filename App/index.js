import express from 'express';
import passport from 'passport';
import cors from 'cors';
import morgan from 'morgan';

import Database from './Database.js';

import setPassportJwtStrategy from './middlewares/setPassportJwtStrategy.js';


export default class App {
    constructor(config) {
        setPassportJwtStrategy(passport, config.jwt.secretOrKey);

        this.port = config.port;

        this.express = express()
            .use(express.json())
            .use(express.urlencoded({extended: true}))
            .use(cors())
            .use(morgan(config.morganFormat))
            .use(passport.initialize());

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
