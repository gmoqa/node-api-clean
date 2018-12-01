const { createContainer, asClass, asFunction, asValue } = require('awilix');

const config = require('../config');
const Application = require('./application/Application');
const Server = require('./Server');

const container = createContainer();

container
  .register({
    app: asClass(Application).singleton(),
    server: asClass(Server).singleton()
  })
  .register({
    router: asFunction(router).singleton()
  })
  .register({
    config: asValue(config)
  });

module.exports = container;