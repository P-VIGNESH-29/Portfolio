const path = require("path");
const fs = require("fs");

async function run() {
  let JimpModule;
  try {
    JimpModule = require("jimp");
  } catch (err) {
    console.error("Jimp module not found. Please run 'npm install jimp' first.");
    process.exit(1);
  }

  const Jimp = JimpModule.Jimp || JimpModule;

  const srcPath = path.join(__dirname, "../public/vignesh.jpg");
  const destPath = path.join(__dirname, "../public/vignesh-cutout.png");

  if (!fs.existsSync(srcPath)) {
    console.error(`Source file not found at ${srcPath}`);
    process.exit(1);
  }

  console.log("Loading image...");
  const image = await Jimp.read(srcPath);
  console.log(`Image loaded successfully: ${image.width}x${image.height}`);

  // Sample background color directly from the buffer at pixel (10, 10)
  const sampleIdx = (10 * image.width + 10) * 4;
  const bgR = image.bitmap.data[sampleIdx + 0];
  const bgG = image.bitmap.data[sampleIdx + 1];
  const bgB = image.bitmap.data[sampleIdx + 2];
  
  console.log(`Sampled Background RGB: r=${bgR}, g=${bgG}, b=${bgB}`);

  // Thresholds for transparency transition
  const threshold = 52;
  const feather = 18;

  // Scan image and set transparent pixels
  image.scan(0, 0, image.width, image.height, function (x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];

    // Compute color distance
    const dist = Math.sqrt(
      Math.pow(r - bgR, 2) +
      Math.pow(g - bgG, 2) +
      Math.pow(b - bgB, 2)
    );

    if (dist <= threshold) {
      // Background: fully transparent
      this.bitmap.data[idx + 3] = 0;
    } else if (dist < threshold + feather) {
      // Edge feathering: semi-transparent
      const ratio = (dist - threshold) / feather;
      this.bitmap.data[idx + 3] = Math.floor(ratio * 255);
    }
    // Else keep it fully opaque (255)
  });

  console.log("Saving processed cutout image...");
  await image.write(destPath);
  console.log(`Cutout saved successfully to ${destPath}`);
}

run().catch((err) => {
  console.error("Error running background removal:", err);
});
