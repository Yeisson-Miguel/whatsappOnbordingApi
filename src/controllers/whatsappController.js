const verifyToken = (req, res) => {
    res.send("Hola verifiToken");
}

const receiveMessage = (req, res) => {
    res.send("Hola received");
}

module.exports = {
    verifyToken,
    receiveMessage,
}