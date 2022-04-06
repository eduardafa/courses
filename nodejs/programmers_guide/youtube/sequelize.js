const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', 'Senhaadraude0', {
    host: 'localhost',
    dialect: 'mysql',
});

// defining a table
const post = sequelize.define('posts', {
    title: {
        // varchar
        type: Sequelize.STRING,
    },
    content: {
        type: Sequelize.TEXT,
    },
});

// post.create({
//     title: 'A cool title',
//     content: 'The most awesome title is here',
// });

// // generating the table
// post.sync({ force: true });

const user = sequelize.define('users', {
    name: {
        type: Sequelize.STRING,
    },
    surname: {
        type: Sequelize.STRING,
    },
    age: {
        type: Sequelize.INTEGER,
    },
    email: {
        type: Sequelize.STRING,
    },
});

// // generating the table
// user.sync({ force: true });

user.create({
    name: 'Eduarda',
    surname: 'Franca',
    age: 27,
    email: 'eduardateste@email.com',
});
