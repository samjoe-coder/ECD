import { variables } from './config/variables.js';
import app from './config/express.js';
import initializeDB from './config/dbConfig.js';
// import loadTestData from './api/models/testData.js'

const startServer = async () => {
    try {
        app.listen(variables.app.port, '0.0.0.0', () => {
            console.log(`Server is running on port ${variables.app.port}`);
        });
        await initializeDB();
        console.log('Database initialized successfully.');
        // await loadTestData();
        console.log('Test data loaded successfully.');
    } catch (error) {
        console.error(`Error connecting to the database: ${error.message} ❌`);
    }
}

startServer();
