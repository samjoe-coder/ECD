import dotenv from "dotenv";
dotenv.config();

export const variables = {
    app: {
        port: process.env.PORT
    },
};