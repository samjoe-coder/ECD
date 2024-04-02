import { downloadFile } from "../services/download.services.js";

const fileDownload = async (req, res) => {
    try {
        await downloadFile();
        res.send({"message" : "File downloaded successfully"});
    } catch (error) {
        console.error('Error downloading file:', error);
    }
}

export { fileDownload };