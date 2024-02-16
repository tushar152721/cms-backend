const express = require("express");
require("./src/config");
const cronJob = require("./src/utils/cron/user-cron");
const routes = require("./src/routes");
const path = require("path");
const server = express();
const cors = require("cors");
server.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
require("dotenv").config({ path: ".env" });
console.log("process.env.FILE_PATH", process.env.FILE_PATH);
process.env.FILE =
  path.join(__dirname, process.env.FILE_PATH) || path.join(__dirname, "public");
console.log("process.env.FILE", process.env.FILE);
<<<<<<< HEAD
server.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
=======
>>>>>>> 6359e711458c3c326600f9759e0eb30167702838
server.use(express.json());
server.use("/api/v1", routes);
server.use("/static", express.static(__dirname + "/public"));

server.listen(9000, () => {
  console.log("server is calling in 9000 port");
});
process.on("SIGINT", () => {
  cronJob.stop();
  process.exit();
});
