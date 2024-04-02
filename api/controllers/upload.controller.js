import { Storage } from '@google-cloud/storage';

const uploadFile = async (req, res) => {   
 
    const bucketName = 'edistro';

    const filePath = './upload.txt';

    const destFileName = 'upload.txt';

    const projectId = 'e-distribution-419112';
    const keyFilename = './e-distribution-419112-b844385d9728.json';
    const storage = new Storage({projectId, keyFilename});


    async function uploadF() {
        const options = {
            destination: destFileName,
        };

        await storage.bucket(bucketName).upload(filePath, options);
        console.log(`${filePath} uploaded to ${bucketName}`);
    }
    uploadF().catch(console.error);

res.send("File uploaded successfully");
}

export default { uploadFile };