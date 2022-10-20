require("module-alias/register");

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const routes = require("@routes/index.js");
const setLocale = require("@middlewares/setLocale");

global.prisma = require("@prisma_root/index.js");

require("dotenv").config();

const app = express();
app.use(helmet());
app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(setLocale);
app.use(express.static("public"));
app.use("/", routes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
