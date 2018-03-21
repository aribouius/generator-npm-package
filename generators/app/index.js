const fs = require('fs')
const path = require('path')
const yosay = require('yosay')
const camelCase = require('lodash.camelcase')
const kebabCase = require('lodash.kebabcase')
const generators = require('yeoman-generator')

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments)
    this.option('skip-install', {
      desc: 'Skip module installations',
      defaults: false
    })
  },

  initializing: function () {
    this.log(yosay('Create your own npm package!'));
  },

  prompting: function () {
    const done = this.async()

    this.prompt([{
      type: 'input',
      name: 'appname',
      message: 'Package name',
      default: this.appname
    }, {
      type: 'input',
      name: 'description',
      message: 'Package description'
    }, {
      type: 'input',
      name: 'gitUser',
      message: 'GitHub user or organization',
    }, {
      type: 'input',
      name: 'author',
      message: 'Author name'
    }, {
      type: 'input',
      name: 'email',
      message: 'Author email'
    }, /*{
      type: 'list',
      name: 'private',
      message: 'Package type',
      choices: ['Public', 'Private']
    }*/], function (props) {
      this.destPath = (this.appname.toLowerCase() === props.appname.toLowerCase()) ? './' : props.appname + '/';
      this.appname = camelCase(props.appname)
      this.moduleName = kebabCase(props.appname)
      this.description = props.description
      this.authorName = props.author
      this.authorEmail = props.email
      this.gitUser = props.gitUser
      //this.isPrivate = props.private === 'Private'
      this.currentYear = new Date().getFullYear()
      done()
    }.bind(this))
  },

  writing: function () {
    const copyFile = this.template.bind(this)
    copyFiles(this.templatePath(), this.destPath)

    function copyFiles(src, dest) {
      fs.readdirSync(src).forEach(function(file) {
        const _file = path.join(src, file)
        const _dest = path.join(dest, file.replace(/^_/, ''))
        if (fs.statSync(_file).isDirectory()) {
          return copyFiles(_file, _dest)
        }
        copyFile(_file, _dest)
      })
    }
  },

  install: function () {
    this.installDependencies({
      npm: true,
      bower: false,
      skipInstall: this.options['skip-install'] || (this.destPath !== './')
    })
  }
})
