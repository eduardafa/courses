const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', 'Senhaadraude0', {
    host: 'localhost',
    dialect: 'mysql',
});

// conecting to a database using Sequelize
sequelize
    .authenticate()
    .then(function () {
        console.log('Successfully connected!');
    })
    .catch(function (error) {
        console.log('Connection fail: ' + error);
    });
                                  