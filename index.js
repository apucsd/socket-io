const express = require("express");
const http = require("http");
const app = express();
const { Server } = require("socket.io");
const expressServer = http.createServer(app);

//socket.io server
const io = new Server(expressServer);
const buyNsp = io.of("/buy");

buyNsp.on("connection", function (socket) {
  console.log("New User connected");
  buyNsp.emit("myEvent", "Hlw From BUy");
});
// simple get request
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
expressServer.listen(3000, function () {
  console.log("Server listening on post 3000");
});
