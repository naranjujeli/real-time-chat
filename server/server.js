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

io.on("connection", (socket) => {
    console.log(`New connection: ${socket.id}`);
});

server.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
});