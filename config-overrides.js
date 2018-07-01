/* config-overrides.js */
module.exports = function override(config, env) {
  // add a plugin
  if (env === 'production') {
    config.devtool = false;
  }
  return config;
};
