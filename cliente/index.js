const net = require("net");
const redline = require("readline-sync");
const Server = {
    port: 3000,
    host: 'localhost'
};
const client = net.createConnection(Server);

client.on('connect', () => {
    console.log("Cliente conectado al servidor");
    sendMessage();
});

function sendMessage() {
    const mensaje = redline.question("Escribe un mensaje para el servidor (o 'exit' para salir): ");
    
    if (mensaje.toLowerCase() === 'exit') {
        console.log("Cerrando conexión...");
        client.end();
        return;
    }
    
    client.write(mensaje);
}

client.on('data', (data) => {
    console.log("El servidor dice: ", data.toString());
    // Ask for the next message after receiving server response
    sendMessage();
})

client.on('error', (err)=> {
    console.log("Error: ", err);
});