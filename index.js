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
app.set("view engine", "ejs");

app.use((_, res, next) => {
  res.set(
    "Content-Security-Policy",
    "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'"
  );
  return next();
});

app.use("/assets", express.static("./assets"));
require("./router")(app);

app.all("*", (req, res) => {
  return res.send("page not found...");
});
