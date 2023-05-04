const PORT = process.env.PORT || 3000;
const app = require("express")();
const server = require("http").createServer(app);
const { Server } = require("socket.io");
const io = require("socket.io")(server);

app.get("/", (req, res) => {
    res.sendFile("./index.html", { root: __dirname });
})

io.on("connection", (socket) => {
    // console.log("user connected")
    socket.on("chat message", (msg) => {
        console.log("message", msg)
    })

    // socket.on("disconnect", () => {
    //     console.log("user disconnected")
    // })
    
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