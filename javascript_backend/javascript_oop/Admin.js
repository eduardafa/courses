// default import
import User from './User.js';

// applying inheritance
// the Admin class inherits the characteristics of the User class
// child class
class Admin extends User {
    // instance using the attributes of the parent class
    constructor(name, email, birth, role = 'admin', active = true) {
        // attributes from parent class (super class)
        super(name, email, birth, role, active);
    }

    // methods
    createCourse(courseName, places) {
        return `${courseName} course created with ${places} places available.`;
    }
}

// const newAdmin = new Admin('Rodrigo', 'rodrigoteste@email.com', '2019-01-01');
// console.log(newAdmin);
// console.log(newAdmin.displayInfo());
// console.log(newAdmin.createCourse('JavaScript', 20));

export default Admin;
