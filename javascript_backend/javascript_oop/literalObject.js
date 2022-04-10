const user = {
    name: 'Eduarda',
    email: 'eduardateste@email.com',
    birth: '2022-01-01',
    role: 'student',
    active: true,

    displayInfo: function () {
        console.log(this.name, this.email);
    },
};

// browser console: prototype chain => admin.__proto__
const admin = {
    name: 'Mariana',
    email: 'marianateste@email.com',
    role: 'admin',

    createCourse() {
        console.log('Course created!');
    },
};

// setting a prototype
// setPrototypeOf(object destination, model object)
Object.setPrototypeOf(admin, user);
admin.createCourse();
admin.displayInfo();
