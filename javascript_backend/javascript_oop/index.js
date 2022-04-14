import User from './User.js';
import Admin from './Admin.js';
import Teacher from './Teacher.js';

// const newUser = new User('Mariana', 'marianateste@email.com', '2021-01-01');
// console.log(newUser.displayInfo());

const newAdmin = new Admin('Rodrigo', 'rodrigoteste@email.com', '2021-01-01');
console.log(newAdmin.name);
newAdmin.name = 'John';
console.log(newAdmin.name);

const newTeacher = new Teacher('Carl', 'carltest@email.com', '2021-01-01');
console.log(newTeacher.displayInfo());
