const Generator = require('yeoman-generator');

class ReactGenerator extends Generator {
  prompting() {
    return this.prompt({
      type: 'confirm',
      name: 'installMobx',
      message: 'Would you like to install Mobx?',
      default: true
    }).then((answers) => {
      this.log(answers);
      this.answers = answers;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  }

  install() {
    this.yarnInstall('react');
    this.yarnInstall('webpack', { dev: true });
    this.answers.installMobx && this.yarnInstall('mobx');
  }
};

module.exports = ReactGenerator;
