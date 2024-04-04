import db from '../../config/dbConfig.js';
import { DataTypes } from 'sequelize';

const customer = db.define('Customer', {
    customerId : {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    email : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ebook : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ebookPassword : {
        type: DataTypes.STRING,
        allowNull: false,
    },
});