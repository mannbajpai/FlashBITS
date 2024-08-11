import { DataTypes } from 'sequelize';
import sequelize from '../configDb.js';

const Admin = sequelize.define('Admin', {
    username: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Admin;
