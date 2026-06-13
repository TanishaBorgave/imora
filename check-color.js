const sharp = require('sharp');
async function check() {
  const { data } = await sharp('/Users/tanisha/imora/public/images/logo-white.png').raw().toBuffer({ resolveWithObject: true });
  console.log('logo-white.png bg:', data[0], data[1], data[2], data[3]);
  const { data: d2 } = await sharp('/Users/tanisha/imora/public/images/logo.png').raw().toBuffer({ resolveWithObject: true });
  console.log('logo.png bg:', d2[0], d2[1], d2[2], d2[3]);
}
check();
