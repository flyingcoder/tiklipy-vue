import express from "express";
import fs from "fs/promises";
import path from "path";
import 'dotenv/config';

const router = express.Router();

const environment = process.env.NODE_ENV;
const meta = {
  app_name: process.env.VITE_APP_NAME,
  app_url: process.env.VITE_APP_URL,
  app_title: process.env.VITE_APP_TITLE,
  app_description: process.env.VITE_APP_DESCRIPTION,
  app_keywords: process.env.VITE_APP_KEYWORDS,
}

router.get("/*", async (_req, res) => {
  const data = {
    meta,
    environment,
    manifest: await parseManifest(),
  }

  res.render("index.html.ejs", data);
});

const parseManifest = async () => {
  if(environment !== "production") return {};

  const manifestPath = path.join(path.resolve(), "dist", "manifest.json");
  const manifestFile = await fs.readFile(manifestPath);

  return JSON.parse(manifestFile);
}

export default router;