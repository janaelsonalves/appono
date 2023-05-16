import fs from "fs";
import { createServer } from "http";
import https from "https";
// var privateKey  = fs.readFileSync('certificates/key.pem', 'utf8');
// var certificate = fs.readFileSync('certificates/cert.pem', 'utf8');

// var credentials = {key: privateKey, cert: certificate};
import express from "express";
// var app = express();
import app from "./config/app";
const PORT = process.env.PORT || 3000;

// your express configuration here

var httpServer = createServer(app);
// var httpsServer = https.createServer(credentials, app);

// For http
// httpServer.listen(8080);
// httpServer.listen(3000);
httpServer.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// For https
// httpsServer.listen(8443);
