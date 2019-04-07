require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./config');
const { v1 } = require('./routes');
const fastify = require('fastify')(config.fastify);

// Export fastify for testing purpose
module.exports = fastify;

(async function() {
  try {
    // Connect to DB
    if (process.env.NODE_ENV !== 'test') {
      await mongoose.connect(config.mongodb.url, config.mongodb.options);
      fastify.log.info('Mongodb Connected');
    }

    // Middlewares
    fastify.use(cors());

    // Plugins
    fastify.register(require('fastify-boom'));
    fastify.register(require('fastify-swagger'), config.documentation);
    fastify.register(v1, { prefix: '/v1' });

    // Server

    await fastify.listen(config.port, '0.0.0.0');
    fastify.swagger();
    fastify.log.info(
      '%s listening in %s environment',
      config.name,
      process.env.NODE_ENV
    );
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();
