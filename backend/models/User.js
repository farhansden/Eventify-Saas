const { Sequelize, DataTypes } = require('sequelize');

// Set up your PostgreSQL connection (update credentials)
const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres',
});

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    organization: {
        type: DataTypes.STRING,
    },
});

// Sync the model with the database
sequelize.sync()
    .then(() => console.log('User model synchronized with the database.'))
    .catch(err => console.error('Error syncing User model:', err));

module.exports = User;
