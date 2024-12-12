/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
// var qr = require('qr-image');
  const questions = [
  {
    // type: 'input',
    name: 'link',
    message: 'Insert the link of the QR code you want generated!'
  }
]

inquirer.prompt(questions).then((answers) => {
  const url = answers.URL;
  console.log(url);
  // var qr_png = qr.image('I love QR!', { type: 'png'});
  // qr_png.pipe(require('fs').createWriteStream('qr_code.png'));
  // var qr_string =  qr.imageSync('I love QR!', { type: 'png'});
});
