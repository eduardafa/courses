function User(name, email) {
    this.name = name;
    this.email = email;

    this.displayInfo = function () {
        return `${this.name}, ${this.email}`;
    };
}

// const newUser = new User('Eduarda', 'eduardateste@email.com');
// console.log(newUser.displayInfo());

// function Admin(role) {
//     User.call(this, 'Eduarda', 'eduardateste@email.com');
//     // after || default answer in case you don't have any input
//     this.role = role || 'student';
// }

// Admin.prototype = Object.create(User.prototype);
// const newUser = new Admin('admin');
// console.log(newUser.displayInfo());
// console.log(newUser.role);

const user = {
    init: function (name, email) {
        this.name = name;
        this.email = email;
    },

    displayInfo: function () {
        return this.name;
    },
};

const newUser = Object.create(user);

newUser.init('Eduarda', 'eduardateste@email.com');
console.log(newUser.displayInfo());
// console.log(newUser.displayInfo('Eduarda'));
// console.log(user.isPrototypeOf(newUser));
