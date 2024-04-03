import app from './config/express.js';
import { variables } from './config/variables.js';

app.listen(variables.app.port, () => {
    console.log(`Server is running on port ${variables.app.port}`);
});