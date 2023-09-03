//MODULE

// class Person {
//   constructor() {}
// }

// const myObj = new Person();

class User {
  constructor(name, email, profession) {
    this.name = name;
    this.email = email;
    this.profession = profession;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getProfession() {
    return this.profession;
  }
}

// const myUser = new User("Arun", "arun@gmail.com", "Architect");

// const userProfession = myUser.getProfession();

// console.log("Profession of the User: ", userProfession);

module.exports = User; // Exporting the class 'User'
