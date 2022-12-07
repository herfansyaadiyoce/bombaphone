const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();
app.set("port", 8080);
app.listen(app.get("port"), console.log("Listen at " + app.get("port")));

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  return res.send("hario bejat");
});

app.all("*", (req, res) => {
  return res.send("page not found...");
});
