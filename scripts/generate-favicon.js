const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Ensure the public directory exists
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Read the SVG file
const svgBuffer = fs.readFileSync(path.join(publicDir, 'favicon.svg'));

// Generate favicon.ico (16x16, 32x32)
sharp(svgBuffer)
  .resize(32, 32)
  .toFile(path.join(publicDir, 'favicon-32x32.png'))
  .then(() => {
    console.log('Generated favicon-32x32.png');
  })
  .catch(err => {
    console.error('Error generating favicon-32x32.png:', err);
  });

// Generate logo192.png
sharp(svgBuffer)
  .resize(192, 192)
  .toFile(path.join(publicDir, 'logo192.png'))
  .then(() => {
    console.log('Generated logo192.png');
  })
  .catch(err => {
    console.error('Error generating logo192.png:', err);
  });

// Generate logo512.png
sharp(svgBuffer)
  .resize(512, 512)
  .toFile(path.join(publicDir, 'logo512.png'))
  .then(() => {
    console.log('Generated logo512.png');
  })
  .catch(err => {
    console.error('Error generating logo512.png:', err);
  });

console.log('Favicon generation complete!'); 