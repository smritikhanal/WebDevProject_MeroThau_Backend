const { DataTypes } = require('sequelize');
const { sequelize } = require("../config/config"); // Import your Sequelize instance

const Contact = sequelize.define('Contact', {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: true // Automatically adds createdAt & updatedAt fields
});

module.exports = Contact;
