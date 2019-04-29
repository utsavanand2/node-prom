const http = require('http')

const requestLogs = []
const PORT = process.env.PORT || 8080

const server = http.createServer((req, res) => {
    requestLogs.push({ url: req.url, date: new Date() })
    res.end(JSON.stringify(requestLogs))
})

server.listen(PORT)
console.log(`Server listening on PORT ${PORT}`)

