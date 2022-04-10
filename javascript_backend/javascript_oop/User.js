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

    displayInfo() {
        return `${this.#name}, ${this.#email}`;
    }
}

// const newUser = new User('Eduarda', 'eduardateste@email.com', '2022-01-01');
// console.log(newUser);
// console.log(newUser.displayInfo());

// console.log(User.prototype.isPrototypeOf(newUser)); //true

// default export
export default User;
