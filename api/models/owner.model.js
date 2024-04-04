const ownerModel = (sequelize, DataTypes) => (
    sequelize.define('Owner', {
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
    })
);

export default ownerModel;
