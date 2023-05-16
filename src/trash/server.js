const express = require("express");

const app = express();

const PORT = 3000;

// create a route for the app
app.get("/", (req, res) => {
  res.send("Hello dev.to!");
});

// server starts listening the `PORT`
app.listen(PORT, () => {
  console.log(`App running at: http://localhost:${PORT}/`);
});

const http = require("http");
const https = require("https");
const fs = require("fs");

const certs = {
  key: fs.readFileSync("./certs/key.pem"),
  cert: fs.readFileSync("./certs/cert.pem"),
};

const HTTP_PORT = 8080;
const HTTPS_PORT = 8443;

// serve the API on 8080 (HTTP) port
const httpServer = http.createServer(app);

// serve the API with signed certificate on 8443 (SSL/HTTPS) port
const httpsServer = https.createServer(certs, app);

httpServer.listen(HTTP_PORT, () => {
  console.log(`HTTP Server running at http://localhost:${HTTP_PORT}`);
});

httpsServer.listen(HTTPS_PORT, () => {
  console.log(`HTTPS Server running at https://localhost:${HTTPS_PORT}`);
});
