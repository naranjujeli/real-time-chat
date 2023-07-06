const PORT = 3001;

const uuid = require('uuid');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const cors = require('cors');

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"]
    }
});

io.engine.generateId = (req) => {
    return uuid.v4();
}

let messagesHistory = [];
io.on("connection", (socket) => {
    console.log(`New connection: ${socket.id}`);
    
    io.emit("update-messages-history", { messagesHistory });

    socket.on("new-message", (data) => {
        console.log("Received data: " + data.content);
        messagesHistory.push({ userId: socket.id, content: data.content });
        io.emit("update-messages-history", { messagesHistory });
    });
});

server.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
});