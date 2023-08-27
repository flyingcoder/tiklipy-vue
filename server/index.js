import express from "express";
import path from "path";
import homeRouter from "./routes/home.js";
import assetRouter from "./routes/assets.js";
import apiRouter from "./routes/api.js";
import robots from 'express-robots-txt';

// Initialize Express app
const app = express();
const port = process.env.PORT || 3483;
const publicPath = path.join(path.resolve(), "public");
const distPath = path.join(path.resolve(), "dist");

// Set up robots.txt middleware
app.use(robots({
  UserAgent: '*',
  Disallow: '/',
  CrawlDelay: '5',
  Sitemap: 'https://nowhere.com/sitemap.xml',
}));

// Use routers and static files
app.use("/api/v1", apiRouter);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(distPath));
} else {
  app.use("/", express.static(publicPath));
  app.use("/src", assetRouter);
}

// This route has a wildcard, so make sure to put this last
app.use(homeRouter);

// Start the server
app.listen(port, () => {
  console.log("Server listening on port", port);
});