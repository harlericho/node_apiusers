const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./api");
//require("../config/database");

//todo: variabile globales
const app = express();
const port = process.env.PORT || 9000;
app.set("port", port);

//todo: middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//todo: routes
app.use("/api", router);
app.use("/", (req, res) => {
  res.send("Welcome to the API");
});

module.exports = app;
