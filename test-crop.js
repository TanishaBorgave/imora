const sharp = require('sharp');
async function test() {
  await sharp('/Users/tanisha/imora/public/images/logo.png')
    .extract({ left: 0, top: 0, width: 163, height: 163 })
    .toFile('/Users/tanisha/imora/public/test-crop.png');
}
test().catch(console.error);
