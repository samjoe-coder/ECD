import gcStorage from "../../config/googleCloud.js";
import env from "../../config/vars.js";

const downloadFile = async() => {
    const bucketName = env.gcVariables.bucketName;

    const fileName = 'uploadLatest.txt';
    const destFileName = './downloads/uploadLatest.txt';

    const options = {
        destination: destFileName,
    };

    try {
        await gcStorage.bucket(bucketName).file(fileName).download(options);
        console.log(`gs://${bucketName}/${fileName} downloaded to ${destFileName}.`);
    } catch (error) {
        console.error('Error downloading file:', error);
    }
}

export { downloadFile };



// const downloadFile = async (req, res) => {

// const bucketName = 'edistro';

// const fileName = 'upload.txt';

// const destFileName = './downloads/file.txt';

// const projectId = 'e-distribution-419112';
// const keyFilename = './e-distribution-419112-b844385d9728.json';
// const storage = new Storage({projectId, keyFilename});

// async function downloadFile() {
//     const options = {
//       destination: destFileName,
//     };
  
//     // Downloads the file
//     await storage.bucket(bucketName).file(fileName).download(options);
  
//     console.log(
//       `gs://${bucketName}/${fileName} downloaded to ${destFileName}.`
//     );
//   }
  
//   downloadFile().catch(console.error);
// res.send("File downloaded successfully");
// }

// export default { downloadFile };