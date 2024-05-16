import { Server } from "socket.io";

const io = new Server(3000);

// Om vi får en connection så kommer vi att skicka ett meddelande (message)
io.on("connection", (socket) => {
  socket.emit("message", "Hello world!");

  socket.on("response", (message) => {
    console.log(message);
  }); // Kommer säga att vi får ett meddelande, 'men vad är meddelandet?'
});
