const downloadFile = async (req, res) => {

    const fileName = req.query.fileName;

    try{
        res.setHeader('Content-Disposition', `attachment; filename="file.pdf"`);
        res.setHeader('Content-Type', 'application/pdf');

        // Send the file to the client
        const filePath = `D:/edistribution/files/${fileName}`;
        res.sendFile(filePath, (err) => {
            if (err) {
                console.error('Error sending file:', err);
                res.status(404).json({ error: 'File not found' });
            }
        });
    }
    catch (error) {
        console.error('Error downloading file:', error);
        res.status(500).json({ error: 'Failed to download file' });
    }

    // try {
    //     res.download(`./files/${fileName}`);
    // } catch (error) {
    //     console.error('Error downloading file:', error);
    //     res.status(500).json({ error: 'Failed to download file' });
    // }

};

export default downloadFile;