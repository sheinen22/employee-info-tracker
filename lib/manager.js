class Manager {
    constructor(name, id, email, office) {
        super(name, id, email)
        this.office = office;
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

      getOfficeNumber() {
          return this.office;
      };

      getRole() {
          return 'Manager';
      };
}

module.exports = Manager;