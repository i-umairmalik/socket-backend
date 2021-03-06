var { Server } = require("socket.io");
var io = new Server({ cors: { origin: "*" }, serveClient: false });
const port = process.env.PORT || 3000;

io.on("connection", function (socket) {
  console.log("New connection");
  console.log("server started at ", new Date());

  socket.on("chat message", (msg) => {
    console.log("New message", msg);
    io.emit("chat message", msg);
  });

  socket.on("disconnect", (msg) => {
    console.log("Disconnected socket", msg);
    console.log("server disconnected at ", new Date());
  });

  socket.on("error", (err) => {
    console.log("Error", err);
    console.log("server error at ", new Date());
  });

  socket.on("pingMessage", (msg) => {
    console.log("Ping message", msg);
    io.emit("pingMessage", msg);
  });

  socket.on("DOMEvent", (msg) => {
    console.log("DOMEvent", socket.id , msg);
  });
});

io.listen(port);
