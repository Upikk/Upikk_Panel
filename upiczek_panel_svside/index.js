const http = require("http");
const { Server } = require("socket.io");
const path = require("path");
const express = require("express");

const app = express();
const server = http.createServer(app);
const io = new Server(server)
let sokecior;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

io.on("connection", (socket) => {
  sokecior = socket
});

app.get("/", (req, res) => {
  res.render("dashboard");
});

app.get("/screenshot/:id", (req, res) => {
  const { id } = req.params;
  const hujek = sokecior;
  hujek.socket.emit("getscreenshot", id);
  hujek.socket.once("respss", (data) => {
    res.json(data);
  });
});

server.listen(7777, () => {
  console.log("Włączono serwer na Porcie: 7777.");
});
