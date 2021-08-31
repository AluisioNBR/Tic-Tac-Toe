const express = require('express'), server = express(), routes = require('./routes')

server.use(
    express.static('../public')
)

server.use(routes)

server.listen(5500, () => console.log("Server on!\nPorta 5500"))
