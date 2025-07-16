const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" }
});

const connectedUsers = new Set();

io.on("connection", (socket) => {
    connectedUsers.add(socket.id);
    console.log("Connected:", socket.id, "Total users:", connectedUsers.size);

    socket.on("send-location", (data) => {
        io.emit("receive-location", {
            id: socket.id,
            ...data
        });
    });

    socket.on("Userlastlocation", (data) => {
        const { userId, latitude, longitude } = data;

        const timestamp = new Date().toISOString(); // e.g. "2025-07-15T14:00:00Z"

        // Store in your DB — you need to define this function
        saveToDatabase(userId, {
            latitude,
            longitude,
            timestamp
        });
    });

    socket.on("disconnect", () => {
        connectedUsers.delete(socket.id);
        console.log("Disconnected:", socket.id);
    });
});
