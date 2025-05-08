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

    let imageBuffer;

    if (source === "db") {
      // Get image from database
      const image = await database("images").where("id", id).first();
      if (!image) return response.status(404).send("Image not found");
      imageBuffer = image.data;
    } else if (source === "static") {
      // Try to get from backend static files
      const staticPath = path.join(__dirname, "../../public/assets", id);

      if (!fs.existsSync(staticPath)) {
        // Try with a different extension if the exact filename doesn't exist
        const fileNameWithoutExt = id.split(".")[0];
        // Extract filename without extension
        const possibleExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
        let foundPath = null;

        for (const ext of possibleExtensions) {
          const alternativePath = path.join(
            __dirname,
            "../../public/assets",
            `${fileNameWithoutExt}${ext}`
          );
          if (fs.existsSync(alternativePath)) {
            foundPath = alternativePath;
            break;
          }
        }

        if (!foundPath) {
          return response.status(404).send("Static image not found");
        }

        imageBuffer = fs.readFileSync(foundPath);
      } else {
        imageBuffer = fs.readFileSync(staticPath);
      }
    } else {
      return response.status(400).send("Invalid source parameter");
    }

    // Process with Sharp
    const optimizedBuffer = await sharp(imageBuffer)
      .resize(parseInt(width) || null)
      .webp({ quality: parseInt(quality) })
      .toBuffer();

    // Save to cache
    fs.writeFileSync(cachePath, optimizedBuffer);

    // Set headers
    response.set("Content-Type", "image/webp");
    response.set("Cache-Control", "public, max-age=31536000");

    // Send response
    response.send(optimizedBuffer);
  } catch (error) {
    console.error("Error optimizing image:", error);
    response.status(500).send("Error processing image");
  }
});

module.exports = router;
