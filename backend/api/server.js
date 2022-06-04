const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const config_result = dotenv.config();
if (process.env.NODE_ENV != "production" && config_result.error) {
  throw config_result.error;
}
const handleError = require("./middleware/handleError");

//ROUTERS
const usersRouter = require("./users/usersRouter");

const server = express();

//tell express where static assets live. absolute path to client/build folder on every machine.'
//global variable that exists in node & absolute path to current file === '__dirname'
server.use(express.json());
server.use(express.static(path.join(__dirname, "client/build")));
server.use(helmet());
server.use(cors());

server.use("/users", usersRouter);

//GLOBAL ENDPOINT
//make sure react-router works correctly. for every url we want to load, its always same index/html.
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

//ERROR HANDLERS
// catch 404 and forward to error handler
server.use(function (req, res, next) {
  next(createError(404));
});

server.use(handleError);

module.exports = server;
