import app from './config/express.js';
import { variables } from './config/variables.js';

app.listen(variables.app.port, '0.0.0.0', () => {
    console.log(`Server is running on port ${variables.app.port}`);
});