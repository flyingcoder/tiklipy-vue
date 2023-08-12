import express from "express";
import path from "path";
import homeRouter from "./routers/home.js";
import assetRouter from "./routers/assets.js";
import apiRouter from "./routers/api.js";

//initialize
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(path.resolve(), "public");
const distPath = path.join(path.resolve(), "dist");

//routers
app.use("/api/v1", apiRouter);
if(process.env.NODE_ENV === "production") {
  app.use("/", express.static(distPath));
} else {
  app.use("/", express.static(publicPath));
  app.use("/src", assetRouter);
}
//this route has a wildcard so make sure to put this last
app.use(homeRouter);


//server endpoint listener
app.listen(port, () => {
  console.log("Server listening on port", port);
});