const path = require('path');

exports.onCreateWebpackConfig = ({ actions, getConfig }, pluginOptions) => {
  // get Gatsby's config
  const config = getConfig();
  // trim and replace
  const clear = p => p.replace('./', '').trim();
  const hasOptions = Object.keys(pluginOptions).filter(
    item => item !== 'plugins'
  ).length;

  // whether there is any option or not
  if (hasOptions) {
    const { plugins, ...options } = pluginOptions;
    // get user specified root dir
    const rootDir = options.root || './';
    // build the root dir
    const mainRoot = path.join(config.context, clear(rootDir));
    // create an empty alias object
    const alias = {};
    // create the alias with the params that specified
    const createAlias = (value, root) => {
      let finalValue = value;
      if (finalValue.startsWith('./')) {
        finalValue = clear(finalValue);
      }
      return `${root}/${finalValue}`;
    };

    // clear paths and add to the alias object
    Object.keys(options.aliases).map(opt => {
      const value = options.aliases[opt];

      // check if the value is an object
      if (typeof value === 'object') {
        const childRoot = path.join(config.context, clear(value.root));
        alias[opt] = createAlias(value.alias, childRoot || mainRoot);
      } else {
        alias[opt] = createAlias(options.aliases[opt], mainRoot);
      }
    });

    // set Webpack config
    actions.setWebpackConfig({
      resolve: {
        alias,
      },
    });
  }
};
