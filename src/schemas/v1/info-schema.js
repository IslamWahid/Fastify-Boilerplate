const errorSchema = require('../common/error-schema');
const notFoundSchema = require('../common/not-found-schema');

module.exports = {
  keepAlive: {
    description: 'Get the status of the API',
    tags: ['Info'],
    summary: 'Obtain the status of the API',
    response: {
      200: {
        description: 'Successful response',
        type: 'string'
      },
      400: notFoundSchema,
      500: errorSchema
    }
  }
};
