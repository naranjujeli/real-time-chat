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

let users = {};
let messagesHistory = [];
io.on("connection", (socket) => {    
    emitUpdateMessagesHistory();

    socket.on("new-user-request", (data) => {
        if (!Object.keys(users).includes(socket.id)) {
            users[socket.id] = data.username;
            io.sockets.sockets.get(socket.id).emit("new-user-accepted", { username: users[socket.id] });
        }
    })

    socket.on("new-message", (data) => {
        messagesHistory.push({ 
            username: users[socket.id], 
            userId: socket.id, 
            content: data.content 
        });
        emitUpdateMessagesHistory();
    });

    socket.on("update-messages-history-request", () => {
        emitUpdateMessagesHistory();
    });
});

function emitUpdateMessagesHistory() {
    io.emit("update-messages-history", { messagesHistory });
    return;
}

server.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
});