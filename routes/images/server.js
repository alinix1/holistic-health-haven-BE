const express = require("express");
const router = express.Router();
const database = require("../../db/knex");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const cacheDir = path.join(__dirname, "../../public/cache");
if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir, { recursive: true });
}

// get image from database
async function getDbImage(id) {
  const image = await database("images").where("id", id).first();
  if (!image) throw new Error("Image not found");
  return image.data;
}

// get image from static files
function getStaticImage(id) {
  const staticPath = path.join(__dirname, "../../public/assets", id);

  if (fs.existsSync(staticPath)) {
    return fs.readFileSync(staticPath);
  }

  // Using different file extensions
  const fileNameWithoutExt = id.split(".")[0];
  const possibleExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];

  for (const ext of possibleExtensions) {
    const alternativePath = path.join(
      __dirname,
      "../../public/assets",
      `${fileNameWithoutExt}${ext}`
    );
    if (fs.existsSync(alternativePath)) {
      return fs.readFileSync(alternativePath);
    }
  }
  throw new Error("Static image not found");
}

router.get("/optimize", async (request, response) => {
  try {
    const { source, id, width = 800, quality = 80 } = request.query;

    // Create cache key and path
    const cacheKey = `${source}-${id}-${width}-${quality}`;
    const cachePath = path.join(cacheDir, `${cacheKey}.webp`);

    // Check if image exists in cache
    if (fs.existsSync(cachePath)) {
      return response.sendFile(cachePath);
    }

    // Get image buffer based on source
    let imageBuffer;
    try {
      if (source === "db") {
        imageBuffer = await getDbImage(id);
      } else if (source === "static") {
        imageBuffer = getStaticImage(id);
      } else {
        return response.status(400).send("Invalid source parameter");
      }
    } catch (error) {
      return response.status(404).send(error.message);
    }

    // Process with Sharp
    const optimizedBuffer = await sharp(imageBuffer)
      .resize(parseInt(width) || null)
      .webp({ quality: parseInt(quality) })
      .toBuffer();

    // Save to cache
    fs.writeFileSync(cachePath, optimizedBuffer);

    // Set headers and send response
    response.set("Content-Type", "image/webp");
    response.set("Cache-Control", "public, max-age=31536000");
    response.send(optimizedBuffer);
  } catch (error) {
    console.error("Error optimizing image:", error);
    response.status(500).send("Error processing image");
  }
});

module.exports = router;
