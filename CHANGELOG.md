<a name="1.0.3"></a>
## v1.0.3 (2019-01-26)

### New Features

* Now, you can define a custom `root` directory for each alias.
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

### Updates
* The very top `alias` key name has been replaced with `aliases`

<a name="1.0.2"></a>
## v1.0.2 (2019-01-25)

### Update

* Typo
  
<a name="1.0.1"></a>
## v1.0.1 (2019-01-25)

### New Features

* Added the plugin assets

<a name="1.0.0"></a>
## v1.0.0 (2019-01-25)

- Initial Release