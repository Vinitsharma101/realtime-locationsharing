import { io } from 'socket.io-client';

let socket;

if (!socket) {
    socket = io('http://localhost:3001', {
        autoConnect: true,
        reconnection: true,
        transports: ['websocket'],
    });
}

export { socket };
