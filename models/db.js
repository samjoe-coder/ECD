import sqlite3 from "sqlite3";

export const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log("Connected to the test database.");

});

export const createTable = () => {
    db.run(
        `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        password TEXT
    )`
    );
    };


export const insertUser = (name, email, password) => {
    db.run(
        `INSERT INTO users (name, email, password) VALUES(?, ?, ?)`,
        [name, email, password],
        (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log("User added successfully");
        }
    );
};
    
// createTable();
insertUser("John Doe", "john@gmail", "123john");