import { Sequelize, DataTypes } from "sequelize";
import ownerModel from '../api/models/owner.model.js';
import customerModel from '../api/models/customer.model.js';
import { variables } from './variables.js';

export const db = {}

const initializeDB = async () => {
    const dbConfigurations = {
        dialect: variables.db.dialect,
        storage: variables.db.storage, // Update this to your desired SQLite database file path
    };
    const sequelize = new Sequelize({ ...dbConfigurations });

    const owners = ownerModel(sequelize, DataTypes);
    const customers = customerModel(sequelize, DataTypes);

    sequelize.sync({ force: false })
        .then(() => {
            console.log("🔄 Database synchronized successfully");
        })
        .catch((error) => {
            console.error("Failed to synchronize database:", error);
        });

    db.Sequelize = Sequelize;
    db.owners = owners;
    db.customers = customers;

};

export default initializeDB;


