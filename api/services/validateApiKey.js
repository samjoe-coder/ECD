import { db } from '../../config/dbConfig.js';

const validateApiKey = async (apiKey) => {
    try {
        const owner = await db.owners.findOne({ where: { apiKey: apiKey } });
        if (!owner) {
            console.error('API key not found');
            return false;
        }
        console.log('API key authenticated successfully');
        return true;
    } catch (error) {
        console.error('Failed to authenticate:', error);
        return false;
    }
}

export default validateApiKey;