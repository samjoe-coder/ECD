import sendPasswordAndFileLinkEmail from "../services/email.js";

const sendEmail = async (req, res) => {
    const { customerEmail, fileLink, pdfPassword } = req.body;

    try {
        await sendPasswordAndFileLinkEmail(customerEmail, fileLink, pdfPassword);
        res.status(200).json({ message: 'Email sent' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
};

export default sendEmail;