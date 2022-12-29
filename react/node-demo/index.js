/*
const http = require('http')
const port = 8000

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type':'text/html'})
    response.write(`
        <!doctype html>
        <html>
        <head>
            <title>Node.js</title>
        </head>
        <body>
            <h3>Welcome to Node.js</h3>
            <b>Node.js runs JavaScript on Server-Side</b>
        </body>
        </html>
    `)
    response.end()

}).listen(port)

console.log('Server listening on port ' + port)
*/

const express = require('express')
const app = express()
const port = 8000

app.get('/', (request, response) => {
    response.send(`
        <!doctype html>
        <html>
        <head>
            <title>Express.js</title>
        </head>
        <body>
            <h3>Welcome to Express.js</h3>
            <b>Express.js Fast, unopinionated, minimalist <br>web framework for Node.js</b>
        </body>
        </html>
    `)    
})
app.listen(port, () => {
    console.log('Server listening on port ' + port)
})