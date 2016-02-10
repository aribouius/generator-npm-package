# generator-node-module
An opinionated [Yeoman](http://yeoman.io) generator for npm packages.

## Installation
```bash
npm i -g yo
npm i -g generator-npm-package
```

## Usage
Create a project directory and initiate the generator
```bash
mkdir ~/source/my-package
cd ~/source/my-package
yo npm-package
```

## Features
* [Babel](https://github.com/babel/babel)
  * [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages/babel-preset-es2015)
  * [babel-preset-stage-0](https://github.com/babel/babel/tree/master/packages/babel-preset-stage-0)
  * [babel-plugin-add-module-exports](https://github.com/59naga/babel-plugin-add-module-exports)
* [Mocha](https://github.com/mochajs/mocha) / [Chai](https://github.com/chaijs/chai) / [Sinon](https://github.com/sinonjs/sinon) / [Jsdom](https://github.com/tmpvar/jsdom)
* [Istanbul](https://github.com/gotwarlost/istanbul)
* [ESLint](http://eslint.org)

## License
MIT
