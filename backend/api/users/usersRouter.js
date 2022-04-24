const express = require("express");
const router = express.Router();
const Users = require('./usersModel');
//middleware

router.get("/", async (req, res, next) => {
  res.status(200).json("usersRouter /GET");
});

router.post("/", async (req, res, next) => {
  res.status(200).json("usersRouter /POST");
});

router.put("/", async (req, res, next) => {
  res.status(200).json("usersRouter /PUT");
});

router.delete("/", async (req, res, next) => {
  res.status(200).json("usersRouter /DELETE");
});

module.exports = router;
