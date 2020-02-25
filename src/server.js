const requester = require('./lib/requester')
const ip = 'localhost'

module.exports = ({ port = 4004, mock = './mocks/mock.json', loader = '' }) => {
    const resolve = require('path').resolve
    const http = require('http')
    const mockConfig = require(resolve(mock))
    const mockHandler = require('./lib/mockHandler')

    const server = http.createServer()

    server.on('request', async (req, res) => {
        let body = mockHandler(req, res, mockConfig)
        if (res.statusCode == 404 && loader) {
            const response = await requester({
                hostname: loader.split(':')[1].substr(2),
                uri: req.url,
                mockPath: mock,
                isHttps: loader.indexOf('https')
            })

            res.writeHead(response.code, {
                'Content-Type': 'application/json'
            })
            res.end(JSON.stringify(response.body))
        }
        res.end(body)
    })

    server.listen(port, ip, () => {
        console.log(`Mock server running! http://${ip}:${port}`)
    })
}
