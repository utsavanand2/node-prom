const http = require('http')
const fs = require('fs')

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
    writeRequest(req)
    res.end(readRequests())
})

server.listen(PORT)
console.log(`Server listening on PORT ${PORT}`)

