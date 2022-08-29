const Employee = require('./employee')

class Intern extends Employee {
    constructor(name, id, email, college) {
        super(name, id, email)
        this.college = college;
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

      getCollege() {
          return this.college;
      };

      getRole() {
          return 'Intern';
      };
}

module.exports = Intern;