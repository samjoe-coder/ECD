import downloadFile from "../services/downloadFile.js";

const downloadFileController = async (req, res) => {

    const fileName = req.query.fileName;

    try{
        await downloadFile(fileName, res);
        console.log('File downloaded');
    }
    catch (error) {
        console.error('Error downloading file:', error);
        res.status(500).json({ error: 'Failed to download file' });
    }

};

export default downloadFileController;