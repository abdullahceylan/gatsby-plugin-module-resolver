# gatsby-plugin-module-resolver

Custom module resolver plugin for Gatsby

This plugin allows you to add new "root" directory that contain your files almost the same as [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver) but for Gatsby.

It also allows you to setup a custom alias for directories and specific files.

## Description

This plugin can simplify the require/import paths in your project. For example, instead of using complex relative paths like `../../../../utils/my-utils`, you can write `utils/my-utils`. It will allow you to work faster since you won't need to calculate how many levels of directory you have to go up before accessing the file.

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
        alias: {
          '@components': './components', // <- will become ./src/components
          helpers: './helpers', // <- will become ./src/helpers
        }
      }
    }
  ]
}
```

This means you should be able to import modules like such:

![Code sample](assets/code-1.png)

It's great, isn't it?

# Options

## root

A string of the root directory. Specify the path (eg. `./src`)

## alias

A map of alias.


# License

MIT, see [LICENSE.md](/LICENSE.md) for details.
