import 'dotenv/config';

import {cleanEnv, port, str, host} from 'envalid';
import App from './App/index.js';


const env = cleanEnv(process.env, {
    PORT: port(),
    MORGAN_FORMAT: str({
        devDefault: 'dev',
        default: 'common'
    }),
    DB_USERNAME: str({
        default: 'postgres'
    }),
    DB_PASSWORD: str(),
    DB_HOST: host({
        devDefault: 'localhost'
    }),
    DB_PORT: port({
        default: 5432
    }),
    DB_NAME: str({
        default: 'outside'
    }),
    JWT_SECRET_OR_KEY: str(),
    JWT_EXPIRATION_TIME: str({
        default: '30m'
    })
});


const app = new App({
    port: env.PORT,
    morganFormat: env.MORGAN_FORMAT,
    database: {
        username: env.DB_USERNAME,
        password: env.DB_PASSWORD,
        host: env.DB_HOST,
        port: env.DB_PORT,
        name: env.DB_NAME
    },
    jwt: {
        secretOrKey: env.JWT_SECRET_OR_KEY,
        expirationTime: env.JWT_EXPIRATION_TIME
    }
});

app.start()
    .then(() => console.log('Server is started...'))
    .catch(console.error);
