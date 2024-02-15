const io = require("socket.io-client");
const socket = io("http://localhost:7777");
const config = require(`${GetResourcePath(
  GetCurrentResourceName()
)}/config.json`);

socket.on("connect", () => {
  console.log("Połączono do WebSocketa");
});

socket.on("getscreenshot", (id) => {
  ClientScreenshot(id, (url) => {
    socket.emit("respss", { name: GetPlayerName(id), url: url });
  });
});

function ClientScreenshot(_src, cbbb) {
  onNet("ScreenshotEvent", (urlik) => {
    cbbb(urlik);
  });
  emitNet("clientScreenshot", _src, webhook);
}
