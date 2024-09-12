const express = require("express");
const http = require("http");
const app = express();

const expressServer = http.createServer(app);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
expressServer.listen(3000, function () {
  console.log("Server listening on post 3000");
});
