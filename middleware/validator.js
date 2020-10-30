const { check } = require('express-validator')

exports.validate = (method) => {
    switch (method) {
        case 'blogs':
            {
                return [
                    check('limit').not().isEmpty().withMessage('Limit is missing')
                ]
            }
    }
}