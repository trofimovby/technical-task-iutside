import 'dotenv/config';

import {cleanEnv, port, str, host} from 'envalid';
import App from './App/index.js';


const env = cleanEnv(process.env, {
    PORT: port(),
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
});


const app = new App({
    port: env.PORT,
    database: {
        username: env.DB_USERNAME,
        password: env.DB_PASSWORD,
        host: env.DB_HOST,
        port: env.DB_PORT,
        name: env.DB_NAME
    }
});

app.start()
    .then(() => console.log('Server is started...'))
    .catch(console.error);

