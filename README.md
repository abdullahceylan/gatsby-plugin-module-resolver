# gatsby-plugin-module-resolver

[![NPM](https://img.shields.io/npm/v/gatsby-plugin-module-resolver.svg?colorB=brightgreen)](https://www.npmjs.com/package/gatsby-plugin-module-resolver) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Custom module resolver plugin for Gatsby

This plugin allows you to add new "root" directory that contain your files almost the same as [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver) but for [Gatsby](https://gatsbyjs.org).

It also allows you to setup a custom alias for directories and specific files.

## Description

This plugin can simplify the require/import paths in your **Gatsby** project. For example, instead of using complex relative paths like `../../../../utils/my-utils`, you can write `utils/my-utils`. It will allow you to work faster since you won't need to calculate how many levels of directory you have to go up before accessing the file.

```js
// Use this:
import MyUtilFn from 'utils/MyUtilFn';
// Rather than that:
import MyUtilFn from '../../../../utils/MyUtilFn';

// And it also work with require calls
// Use this:
const MyUtilFn = require('utils/MyUtilFn');
// Rather than that:
const MyUtilFn = require('../../../../utils/MyUtilFn');
```

## Getting started

Install the plugin

```
$ npm install gatsby-plugin-module-resolver
```

or

```
$ yarn add gatsby-plugin-module-resolver
```

Specify the plugin in your `gatsby-config.js` with the custom root or alias. Here's an example:
```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src', // <- will be used as a root dir
        aliases: {
          '@components': './components', // <- will become ./src/components
          helpers: './helpers', // <- will become ./src/helpers
          static: {
            root: './public', // <- will used as this alias' root dir
            alias: './static' // <- will become ./public/static
          }
        }
      }
    }
  ]
}
```

This means you should be able to import modules like such:

![Code sample](https://raw.githubusercontent.com/abdullahceylan/gatsby-plugin-module-resolver/master/assets/code-1.png)

It's great, isn't it?

# Options

## root

A string of the root directory. Specify the path (eg. `./src`)

## alias

A map of alias. Aliases' values could be a string or an object. If you want to use a different root directory for an alias rather than main `root` then you need to specify an object like:

```javascript
{
  root: './src',
  aliases: {
    ...
    static: {
      root: './public', // <- will used as this alias' root dir
      alias: './static' // <- will become ./public/static
    },
    ...
  }
}
```

In this example, Gatsby is going to use `/public` directory as `static` alias' root directory rather than `/src`.

# License

MIT, see [LICENSE.md](https://raw.githubusercontent.com/abdullahceylan/gatsby-plugin-module-resolver/master/LICENSE) for details.
