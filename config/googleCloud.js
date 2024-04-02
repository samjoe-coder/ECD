import { Storage } from '@google-cloud/storage';
import env from './vars.js';

const projectId = env.gcVariables.projectId;
const keyFilename = env.gcVariables.keyFilename;

const gcStorage = new Storage({projectId, keyFilename});

export default gcStorage;