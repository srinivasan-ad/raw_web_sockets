import { WebSocketServer } from "ws";
const ws = new WebSocketServer({port : 8080});
//event handler
ws.on("connection",function(socket)
{
    socket.send("hello");
})