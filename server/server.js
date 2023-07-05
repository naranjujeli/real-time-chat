const PORT = 3001;

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const cors = require('cors');

const io = new Server(server, {
    cors: {
        origin: `http://${process.env.REACT_APP_HOST}:${PORT}/`,
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log(`New connection: ${socket.id}`);
});

server.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
});