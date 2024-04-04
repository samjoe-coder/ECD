import { variables } from '../../config/variables.js';
import nodemailer from 'nodemailer';

const sendPasswordAndFileLinkEmail = async (customerEmail, fileLink, pdfPassword) => {
    const email = nodemailer.createTransport({
        service: variables.email.service,
        auth: {
            user: variables.email.user,
            pass: variables.email.pass
        }
    });

    const mailOptions = {
        from: variables.email.user,
        to: customerEmail,
        subject: 'Test Email',
        html: `
            <h1>Thank you for your order!</h1>
            <p>Here is your file link: <a href="http://${variables.ip}/api/download/file?fileName=${fileLink}">${fileLink}</a></p>
            <p>Here is your password: ${pdfPassword}</p>
        `
    };

    email.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error occurred:', error);
        } else {
            console.log('Email sent:');
        }
    });
};

export default sendPasswordAndFileLinkEmail;




