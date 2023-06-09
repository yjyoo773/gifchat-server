const PORT = process.env.PORT || 3000;

require('dotenv').config()
const app = require("express")();
const server = require("http").createServer(app);
const { Server } = require("socket.io");
// const io = require("socket.io")(server);
const io = new Server(server);

const User = require('./models/user');

const DATABASE = process.env.ATLAS_URI
const mongoose = require('mongoose');
mongoose.connect(DATABASE, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function(){
    console.log('connected to database!');
})

app.get("/", (req, res) => {
    res.sendFile("./index.html", { root: __dirname });
})

io.on("connection", (socket) => {
    socket.on("chat message", (msg) => {
        io.emit("chat message", msg)
    })
})

server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})

// const gifs = io.of("/gifs");

// gifs.on("connection", socket => {
//     console.log("User joined: " + socket.id);
//     socket.emit("connect", { message: "a new client connected" })
//     socket.on("join", payload => {
//         console.log(payload)
//     })
// })