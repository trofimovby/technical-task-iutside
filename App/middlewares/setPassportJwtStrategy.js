import {Strategy, ExtractJwt} from 'passport-jwt';

import {User} from '../models/User.js';


export default (passport, secretOrKey) => {
    const options = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey
    };

    const strategy = new Strategy(options, (payload, done) => {
        User.findOne({
            select: ['id'],
            where: {
                id: +payload.userId
            }
        })
            .then((account) => {
                if (account) {
                    done(null, account);
                } else {
                    done(null, null);
                }
            })
            .catch(error => {
                done(error, null)
            });
    });

    return passport.use(strategy);
};
