import { WebSocketServer } from "ws";
const ws = new WebSocketServer({ port: 8080 });
//event handler
ws.on("connection", function (socket) {
    console.log("user connected !")
  setInterval(() => {
    socket.send("stock rate is " + Math.random());
  }, 2000);
  socket.on("message",(e) => {
    console.log(e);
  })
});
