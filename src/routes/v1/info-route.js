const schema = require('../../schemas/v1/info-schema');
const controller = require('../../controllers/v1/info-controller');

/**
 * Info routes endpoints
 */
module.exports = () => {
  return [
    {
      method: 'GET',
      url: '/keep-alive',
      schema: schema.keepAlive,
      handler: controller.keepAlive
    }
  ];
};
