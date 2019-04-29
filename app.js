const http = require('http')
const Prometheus = require('prom-client')

const requestLogs = []
const PORT = process.env.PORT || 8000

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        requestLogs.push({ url: req.url, date: new Date() })
        res.end(JSON.stringify(requestLogs))
    } else if (req.url == '/metrics') {
        res.setHeader('Content-Type', Prometheus.register.contentType)
        res.end(Prometheus.register.metrics())
    }
    
})

server.listen(PORT)
console.log(`Server listening on PORT ${PORT}`)

