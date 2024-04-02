import gcStorage from "../../config/googleCloud.js";
import env from "../../config/vars.js";

const uploadFile = async() => {
    const bucketName = env.gcVariables.bucketName;
    
    const filePath = './uploadLatest.txt';
    const destFileName = 'uploadLatest.txt';

    const options = {
        destination: destFileName,
    };

    try {
        await gcStorage.bucket(bucketName).upload(filePath, options);
        // console.log(`${filePath} uploaded to ${bucketName}`);
    } catch (error) {
        console.error('Error uploading file:', error);
    }
    
}

export { uploadFile };

