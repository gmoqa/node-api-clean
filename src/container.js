const { createContainer, asClass, asFunction, asValue } = require('awilix');
const { scopePerRequest } = require('awilix-express');

const config = require('../config');
const Application = require('./application/Application');
const Server = require('./ui/http/Server');
const router = require('./ui/http/router');
const loggerMiddleware = require('./ui/http/logging/loggerMiddleware');
const errorHandler = require('./ui/http/errors/errorHandler');
const devErrorHandler = require('./ui/http/errors/devErrorHandler');

const logger = require('../src/infrastructure/logging/logger');

const container = createContainer();

container
  .register({
    app: asClass(Application).singleton(),
    server: asClass(Server).singleton()
  })
  register({
    router: asFunction(router).singleton(),
    logger: asFunction(logger).singleton()
  })
  .register({
    config: asValue(config)
  });

container
.register({
  loggerMiddleware: asFunction(loggerMiddleware).singleton()
})
.register({
  containerMiddleware: asValue(scopePerRequest(container)),
  errorHandler: asValue(config.production ? errorHandler : devErrorHandler)
});


module.exports = container;