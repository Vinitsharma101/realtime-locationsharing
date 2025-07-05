const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server,
    { cors: { origin: "*" } }

);

const connectedUsers = new Set();

io.on("connection", (socket) => {
    connectedUsers.add(socket.id);
    console.log("Connected:", socket.id, "Total:", connectedUsers.size);

    socket.on("send-location", (data) => {
        io.emit("receive-location", {
            id: socket.id,
            ...data
        });
    });

    socket.on("disconnect", () => {
        connectedUsers.delete(socket.id);
        console.log("Disconnected:", socket.id, "Total:", connectedUsers.size);
    });
});

const PORT = 3001; // Or any port you want
server.listen(PORT, () => {
    console.log(`Socket.IO server running on port ${PORT}`);
});


module.exports = { server, io };