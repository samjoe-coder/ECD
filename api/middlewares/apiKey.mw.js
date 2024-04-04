import validateApiKey from '../services/validateApiKey.js';

async function authenticate(req, res, next) {
    const apiKey = req.headers['api-key'];
    if (!apiKey) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const ownerPresent = await validateApiKey(apiKey);
    console.log('ownerPresent:', ownerPresent);
    if(!ownerPresent) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    // API key is valid, proceed to next middleware
    next();
}

export default authenticate;