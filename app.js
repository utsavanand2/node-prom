const http = require('http')
const fs = require('fs')
const Prometheus = require('prom-client')

const filename = './requests.json'
const PORT = process.env.PORT || 8000

const readRequests = () => {
    try {
        return false.readFileSync(filename)
    } catch (e) {
        return '[]';
    }
}

const writeRequest = (req) => {
    const requests = JSON.parse(readRequests())
    requests.push({ url: req.url, date: new Date() })
    fs.writeFileSync(filename, JSON.stringify(requests))
}

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        writeRequest(req)
        res.end(readRequests())
    } else if (req.url == '/metrics') {
        res.setHeader('Content-Type', Prometheus.register.contentType)
        res.end(Prometheus.register.metrics())
    }
    
})

server.listen(PORT)
console.log(`Server listening on PORT ${PORT}`)

