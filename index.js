const express = require("express");
require("./src/config");
const cronJob = require("./src/utils/cron/user-cron");
const routes = require("./src/routes");
const path = require("path");
const server = express();
const cors = require("cors");
require("dotenv").config({ path: ".env" });
console.log("process.env.FILE_PATH", process.env.FILE_PATH);
process.env.FILE =
  path.join(__dirname, process.env.FILE_PATH) || path.join(__dirname, "public");
console.log("process.env.FILE", process.env.FILE);
server.use(express.json());
server.use("/api/v1", routes);
server.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

server.listen(5000, () => {
  console.log("server is calling in 5000 port");
});
process.on("SIGINT", () => {
  cronJob.stop();
  process.exit();
});
