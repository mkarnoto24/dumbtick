const jwt = require('express-jwt')

exports.authenticated = jwt({ secret: 'final-test-key' })