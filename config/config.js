const config = process.env.NODE_ENV == 'development' ? require('./config-development') : require('./config-production')
module.exports = {
  ...config
}
