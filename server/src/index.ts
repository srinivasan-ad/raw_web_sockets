import { WebSocketServer } from "ws";
const ws = new WebSocketServer({ port: 8080 });
//event handler
ws.on("connection", function (socket) {
    console.log("user connected !")
//   setInterval(() => {
//     socket.send("stock rate is " + Math.random());
//   }, 2000);
  //ping pong application
//   socket.on("message",(e) => {
//     if(e.toString() == "ping")
//     {
//         socket.send("pong");
//     }
//     console.log(e.toString());
//   })
socket.on("message", (e) => {
    const message = e.toString(); 
    console.log("Received:", message);
    socket.send("Message received: " + message);
})
});
