import express from "express";
import path from "path";
import homeRouter from "./routers/home.js";
import assetRouter from "./routers/assets.js";

const api = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(path.resolve(), "public");
const distPath = path.join(path.resolve(), "dist");

api.get("/api/v1/hello", (_req, res) => {
  res.json({ message: "Hello, world!" });
});

if(process.env.NODE_ENV === "production") {
  api.use("/", express.static(distPath));
} else {
  api.use("/", express.static(publicPath));
  api.use("/src", assetRouter);
}
api.use(homeRouter);

api.listen(port, () => {
  console.log("Server listening on port", port);
});