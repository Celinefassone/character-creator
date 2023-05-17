// Express, what is it?
// https://expressjs.com/

// TODO Understand every line here
const express = require("express");

// TODO Understand line here
const serveStatic = require("serve-static");
const path = require("path");
const app = express();
app.use(serveStatic(path.join(__dirname, "dist")));
const port = process.env.PORT || 80;
app.listen(port);
