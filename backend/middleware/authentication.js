const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require('../errors');

const authenticateUser = async (req,res,next) => {
    console.log('comes inside auth middleware for checking');
}


module.exports = authenticateUser;
