// parent class
class User {
    // the # symbol is used to encapsulate the user and protect it from future modifications
    #name;
    #email;
    #birth;
    #role;
    #active;
    constructor(name, email, birth, role, active = true) {
        this.#name = name;
        this.#email = email;
        this.#birth = birth;
        this.#role = role || 'student';
        this.#active = active;
    }

    // acessors functions: getters and setters
    // getters never take any arguments
    // accessing properties
    get name() {
        return this.#name;
    }

    get email() {
        return this.#email;
    }

    get birth() {
        return this.#birth;
    }

    get role() {
        return this.#role;
    }

    get active() {
        return this.#active;
    }

    // setters accept one only parameter
    // setting properties
    set name(newName) {
        // if newName is an empty string
        if (newName === '') {
            throw new Error('Not valid format!');
        }
        this.#name = newName;
    }

    // // private method
    // #buildObjUser() {
    //     return {
    //         name: this.#name,
    //         email: this.#email,
    //         birth: this.#birth,
    //         role: this.#role,
    //         active: this.#active,
    //     };
    // }

    // public method
    displayInfo() {
        // const objUser = this.#buildObjUser();
        // return `${objUser.name}, ${objUser.email}, ${objUser.birth}, ${objUser.role}, ${objUser.active}`;

        // after creating getters and setters, this method should be write like this:
        return `${this.name}, ${this.email}, ${this.birth}, ${this.role}, ${this.active}`;
    }
}

// const newUser = new User('Eduarda', 'eduardateste@email.com', '2022-01-01');
// console.log(newUser);
// console.log(newUser.displayInfo());

// console.log(User.prototype.isPrototypeOf(newUser)); //true

// default export
export default User;
