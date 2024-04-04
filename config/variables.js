import dotenv from "dotenv";
dotenv.config();

export const variables = {
    app: {
        port: process.env.PORT
    },
    email: {
        service: process.env.EMAIL_SERVICE,
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    },
    db : {
        name: process.env.DB_NAME,
        dialect: process.env.DB_DIALECT,
        storage : process.env.DB_STORAGE
    },

    ip: process.env.IPADDRESS
};