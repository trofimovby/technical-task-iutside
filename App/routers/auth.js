import {Router} from 'express';


export default class AuthRouter {
    constructor(expressApp, options) {
        this.options = options;

        const router = Router()
            .post('/signin', this.signin.bind(this))
            .post('/login', this.login.bind(this))
            .post('/logout', this.logout.bind(this))

        expressApp.use('', router);
    }

    signin(req, res) {
        res.status(200).json();
    }

    login(req, res) {
        res.status(200).json();
    }

    logout(req, res) {
        res.status(200).json();
    }
}
