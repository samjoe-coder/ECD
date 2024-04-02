import gcStorage from "../../config/googleCloud.js";
import env from "../../config/vars.js";


const uploadFile = async() => {
    const bucketName = env.gcVariables.bucketName || 'edistro';
    
    const filePath = './upload3.txt';
    const destFileName = 'upload3.txt';

    const options = {
        destination: destFileName,
    };

    try {
        await gcStorage.bucket(bucketName).upload(filePath, options);
        console.log(`${filePath} uploaded to ${bucketName}`);
    } catch (error) {
        console.error('Error uploading file:', error);
    }
    
}

export { uploadFile };



// const uploadFile = async (req, res) => {   
 
//     const bucketName = 'edistro';

//     const filePath = './upload.txt';

//     const destFileName = 'upload.txt';

//     const projectId = 'e-distribution-419112';
//     const keyFilename = './e-distribution-419112-b844385d9728.json';
//     const storage = new Storage({projectId, keyFilename});


//     async function uploadF() {
//         const options = {
//             destination: destFileName,
//         };

//         await storage.bucket(bucketName).upload(filePath, options);
//         console.log(`${filePath} uploaded to ${bucketName}`);
//     }
//     uploadF().catch(console.error);

// res.send("File uploaded successfully");
// }

// export default { uploadFile };