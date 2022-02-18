var { Server } = require("socket.io");
var io = new Server({ cors: { origin: "*" }, serveClient: false });

io.on("connection", function (socket) {
  console.log("New connection");

  socket.on("chat message", (msg) => {
    console.log("New message", msg);
    io.emit("chat message", msg);
  });

  socket.on("disconnect", (msg) => {
    console.log("Disconnected socket", msg);
  });

    socket.on("error", (err) => {
    console.log("Error", err);
  });   

  socket.on("pingMessage", (msg) => {
    console.log("Ping message", msg);
    io.emit("pingMessage", msg);
  })

  socket.on("DOMEvent", (msg) => {
    console.log("DOMEvent", msg);
  })

});

io.listen(3000);
