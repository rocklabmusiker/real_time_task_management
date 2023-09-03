const {check} = require( 'express-validator');

exports.validateLogin = [
    check('email', 'please include valid email').isEmail(),
    check('password','password is required').exists()
];