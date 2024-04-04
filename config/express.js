import express from 'express';
import cors from 'cors';
import router from '../api/routes/index.js';
// import authenticate from '../api/middlewares/apiKey.mw.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
// app.use(authenticate);

app.use('/api', router);

export default app;