const customerModel = (sequelize, DataTypes) => (
    sequelize.define('Customer', {
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
    })
);

export default customerModel;