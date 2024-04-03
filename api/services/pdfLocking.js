import { execFile } from  'child_process';
import passwordGeneration from './passwordGeneration';

function pdfLocking(inputFilePath, inputFileName, outputFilePath){
    
    const password = passwordGeneration();
    
    const cmd = 'qpdf';
    const args = ['--encrypt', password, password, '256', '--', inputFilePath + inputFileName, outputFilePath+inputFileName];

    execFile(cmd, args, (err) => {
        if (err) {
            console.error('Error occurred: ' + err);
        } else {
            console.log('PDF encrypted :)');
        }
    });
}

export default pdfLocking;

// const cmd = 'qpdf';
// const args = ['--encrypt', 'test', 'test', '256', '--', './test.pdf', './output/op1.pdf'];

// execFile(cmd, args, (err) => {
//     if (err) {
//         console.error('Error occurred: ' + err);
//     } else {
//         console.log('PDF encrypted :)');
//     }
// });
