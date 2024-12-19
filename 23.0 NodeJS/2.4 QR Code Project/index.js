/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
// var qr = require('qr-image');

inquirer
  .prompt([
  {
    // type: 'input',
    message: 'Insert the link of the QR code you want generated!',
    name: 'link'
  }
])
  .then((answers) => {
    const url = answers.link;
    // PNG
    // var qr_svg = qr.image(url);
    // qr_svg.pipe(fs.createWriteStream('qr_img.png', {size: 10}));
    // SVG
    var qr_svg = qr.image(url, { type: 'svg', size: '10' });
    qr_svg.pipe(fs.createWriteStream('qr_image.svg'));
    qr_svg.svgObject(url);

    fs.writeFileSync('./URLs.txt',url);
  })
  .catch((error) => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in current environment
    } else {
      // Something else went wrong
    }
  })

// inquirer.prompt(questions).then((answers) => {
//   const url = answers.URL;
//   console.log(url);
//   // var qr_png = qr.image('I love QR!', { type: 'png'});
//   // qr_png.pipe(require('fs').createWriteStream('qr_code.png'));
//   // var qr_string =  qr.imageSync('I love QR!', { type: 'png'});
// })
