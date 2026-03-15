import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([
    {
      message: "Enter your URL:",
      name: "userURL",
    },
  ])
  .then((answers) => {
    const url = answers.userURL;
    var qrImage = qr.image(url, { type: 'png' });
    qrImage.pipe(fs.createWriteStream('qr_image.png'));
    fs.writeFile('url.txt', url, (err) => {
      if (err) throw err;
      console.log("✓ QR code generated and URL saved successfully!");
    });
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });