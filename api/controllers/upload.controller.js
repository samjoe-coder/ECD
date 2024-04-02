import { uploadFile } from "../services/upload.services.js";

const fileUpload = async (req, res) => {
    try {
        await uploadFile();
        res.send({"message" : "File uploaded successfully"});
    } catch (error) {
        console.error('Error uploading file:', error);
    }
}

export { fileUpload };

