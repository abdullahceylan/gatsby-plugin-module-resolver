const path = require('path');

const clear = p => p.replace('./', '').trim();

exports.onCreateWebpackConfig = ({ actions, getConfig }, pluginOptions) => {
  // get gatsby config
  const config = getConfig();
  const hasOptions = Object.keys(pluginOptions).filter(
    item => item !== 'plugins'
  ).length;

  // whether there is any option or not
  if (hasOptions) {
    const { plugins, ...options } = pluginOptions;
    // get user specified root dir
    const rootDir = options.root || './';
    // build the root dir
    const contextSrc = path.join(config.context, clear(rootDir));
    // create an empty alias object
    const alias = {};

    // clear paths and add to the alias object
    Object.keys(options.alias).map(opt => {
      if (options.alias[opt].startsWith('./')) {
        alias[opt] = `${contextSrc}/${clear(options.alias[opt])}`;
      }
    });

    // set Webpack config
    actions.setWebpackConfig({
      resolve: {
        alias
      }
    });
  }
};
