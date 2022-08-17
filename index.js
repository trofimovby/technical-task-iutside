import 'dotenv/config';

import {cleanEnv, port} from 'envalid';
import App from './App/index.js';


const env = cleanEnv(process.env, {
    PORT: port()
});


const app = new App({
    port: env.PORT
});

app.start()
    .then(() => console.log('Server is started...'))
    .catch(console.error);
