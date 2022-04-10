// default import
import User from './User.js';

// applying inheritance
// the Teacher class inherits the characteristics of the User class
// child class
class Teacher extends User {
    // instance using the attributes of the parent class
    constructor(name, email, birth, role = 'teacher', active = true) {
        // attributes from parent class (super class)
        super(name, email, birth, role, active);
    }

    // methods
    approveStudent(student, course) {
        return `The ${student} was approved in the ${course} course.`;
    }
}

// const newTeacher = new Teacher(
//     'Mariana',
//     'marianateste@email.com',
//     '2018-01-01'
// );

// console.log(newTeacher);
// console.log(newTeacher.displayInfo());
// console.log(newTeacher.approveStudent('Carlos', 'JavaScript'));

export default Teacher;
