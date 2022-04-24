const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const config_result = dotenv.config();
if (process.env.NODE_ENV != "production" && config_result.error) {
  throw config_result.error;
}
const handleError = require("./middleware/handleError");

//ROUTERS
const usersRouter = require("./users/usersRouter");

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/users", usersRouter);

//GLOBAL ENDPOINT
app.get("*", (req, res, next) => {
  res.json(`\nserver is running on ${process.env.PORT}\n`);
});

//ERROR HANDLERS
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(handleError);

module.exports = app;
