const CustomAPIError = require('./custom-api');

class BadRequestError extends CustomAPIError {
  constructor(message,errors) {
    super(message,400,errors);         
  }
}

module.exports = BadRequestError;
