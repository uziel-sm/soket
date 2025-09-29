const net = require("net")
const server =  net.createServer();
server.on('connection', (Socket) => {
    Socket.on('data', (data) => {
        console.log("Mensaje recibido del cliente: ",data.toString());
        Socket.write("Mensaje recibido \n")
    })
    Socket.on('close', () => {
        console.log("Cliente desconectado")
    })
    Socket.on('error', (error) => {
        console.log("Error: ", error)
    })
})

server.listen(3000, () => {
    console.log("Servidor corriendo en el puerto", server.address().port);
});