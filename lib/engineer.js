const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email) //super = used to access properties from object literal?
        this.github = github;
      };

      getName () {
        return this.name;
      };

      getId () {
          return this.id;
      };

      getEmail () {
          return this.email;
      };

      getGithub() {
          return this.github;
      };

      getRole() {
          return 'Engineer';
      };

}

module.exports = Engineer;