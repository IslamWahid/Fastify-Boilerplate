module.exports = {
  fastify: {
    logger: {
      prettyPrint: true,
      level: 'info'
    },
    https: {
      key: process.env.HTTPS_KEY, // .key file path
      cert: process.env.HTTPS_CERT // .crt file path
    }
  }
};
