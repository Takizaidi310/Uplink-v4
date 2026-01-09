// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// --- UPLINK PROTOCOL HANDLER ---
io.on('connection', (socket) => {
    console.log(`[UPLINK] New carrier signal detected: ${socket.id}`);

    // Handle joining a specific Frequency (Channel)
    socket.on('join_frequency', ({ username, channel }) => {
        socket.join(channel);
        
        // Store metadata on the socket for reference
        socket.data.username = username;
        socket.data.channel = channel;

        // Notify the channel
        const timestamp = Date.now();
        io.to(channel).emit('network_log', {
            sender: 'SYSTEM',
            text: `${username} HAS ENTERED THE FREQUENCY.`,
            ts: timestamp
        });
        
        console.log(`[UPLINK] ${username} joined frequency [${channel}]`);
    });

    // Handle incoming payloads (Messages)
    socket.on('payload', (data) => {
        // Broadcast to everyone in the channel (including sender)
        // ideally, we send to everyone in the room 'data.channel'
        io.to(data.channel).emit('network_log', {
            sender: data.sender,
            text: data.text,
            ts: Date.now()
        });
    });

    // Handle disconnect
    socket.on('disconnect', () => {
        if (socket.data.username && socket.data.channel) {
            io.to(socket.data.channel).emit('network_log', {
                sender: 'SYSTEM',
                text: `SIGNAL LOST: ${socket.data.username}`,
                ts: Date.now()
            });
            console.log(`[UPLINK] Signal lost: ${socket.data.username}`);
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`\n>> UPLINK SERVER ACTIVE ON PORT ${PORT}`);
    console.log(`>> SECURE SHELL READY.`);
});