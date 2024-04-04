import db from '../../config/dbConfig.js';
import { DataTypes } from 'sequelize';

const owner = db.define('Owner', {
    ownerId : {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    apiKey : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name : {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone : {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

export default owner;
