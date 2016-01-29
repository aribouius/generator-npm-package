const generators = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments)

    this.option('skip-install', {
      desc: 'Skip the bower and node installations',
      defaults: false
    })
  },

  initializing: function () {
    this.log(yosay('Create your own ' + chalk.blue('node-package') + '!'));
  },

  prompting: function () {
    const done = this.async()

    this.prompt([{
      type: 'input',
      name: 'appname',
      message: 'Project name',
      default: this.appname
    }, {
      type: 'input',
      name: 'description',
      message: 'Project description'
    }, {
      type: 'input',
      name: 'gitUser',
      message: 'GitHub user or organization'
    }], function (props) {
      this.appname     = props.appname
      this.description = props.description
      this.gitUser     = props.gitUser
      done()
    }.bind(this))
  },

  writing: function () {
    this.template('src', 'src')
    this.template('test', 'test')
    this.template('_package.json', 'package.json')
    this.template('.babelrc', '.babelrc')
    this.template('.eslintrc', '.eslintrc')
    this.template('.gitignore', '.gitignore')
    this.template('.npmignore', '.npmignore')
    this.template('index.js', 'index.js')
    this.template('README.md', 'README.md')
  },

  install: function () {
    this.npmInstall()
  }
})
