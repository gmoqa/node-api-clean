require('dotenv').load();

const ENV = process.env.ENV || 'dev';

const envConfig = require(path.join(__dirname, 'environments', ENV));

const config = Object.assign({
  [ENV]: true,
  env: ENV,
}, envConfig);

module.exports = config;