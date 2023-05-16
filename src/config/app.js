const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "./dist")));

app.get("/", (req, res) => {
  res.header("Content-type", "text/html");
  res.send("<h1>Hello, Secure World!</h1>");
});
// "start": "nodemon index.js",

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

module.exports = app;
