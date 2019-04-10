const { version } = require('../../package');

const envConfig = require(`./env/config-${process.env.NODE_ENV || 'prod'}`);

const baseConfig = {
  name: 'API',
  port: process.env.PORT || 3000,
  mongodb: {
    url: `mongodb://${process.env.MONGO_URL || 'mongo/db_name'}`,
    options: {
      useNewUrlParser: true
    }
  },
  documentation: {
    swagger: {
      info: {
        version,
        title: 'API Documentation',
        description: 'API Endpoints Documentation'
      },
      schemes: [envConfig.fastify.https ? 'https' : 'http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      securityDefinitions: {
        basicAuth: {
          type: 'basic'
        }
      }
    },
    exposeRoute: true
  }
};

module.exports = { ...baseConfig, ...envConfig };
