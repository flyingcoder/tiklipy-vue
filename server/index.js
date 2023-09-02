import express from "express";
import path from "path";
import homeRouter from "./routes/home.js";
import assetRouter from "./routes/assets.js";
import apiRouter from "./routes/api.js";
import pino from './logger.js';

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(path.resolve(), "public");
const distPath = path.join(path.resolve(), "dist");

// Use routers and static files
app.use("/api/v1", apiRouter);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(distPath));
  // Pino logger for express request logs
  app.use(pino);
} else {
  //import alvinRoutes from "./routes/alvin.js";
  //app.use("/alvin", alvinRoutes);
  app.use("/", express.static(publicPath));
  app.use("/src", assetRouter);
}

// This route has a wildcard, so make sure to put this last
app.use(homeRouter);

app.listen(port, () => {
  pino.logger.info(`Server listening on port: ${port}`);
});