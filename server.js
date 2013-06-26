http = require('http')
io = require('socket.io')

server = http.createServer( )

server.listen(8000)

socket = io.listen(server)

myrand = (client) -> setInterval( -> 
    r1 = Math.floor(Math.random()*101)
    r2 = 100-r1
    client.send(String(r1) + ',' + String(r2))
, 2000)

socket.on('connection', (client) -> myrand(client))