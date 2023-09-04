const { check, validationResult } = require('express-validator');

exports.validateRegister = [
    check('username', 'username is required and should be at least 3 character').isLength({min: 3}),
    check('email', 'pleaase include a valid email').isEmail(),
    check('password', 'please enter a password with 8 or more characters').isLength({min: 8})

]