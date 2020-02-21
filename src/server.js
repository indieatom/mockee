module.exports = ({
    port = 4004,
    mock = './mocks/mock.json',
    ip = 'localhost'
}) => {
    const resolve = require('path').resolve
    const http = require('http')
    const mockConfig = require(resolve(mock))
    const mockHandler = require('./lib/mockHandler')

    const server = http.createServer()

    server.on('request', (req, res) => mockHandler(req, res, mockConfig))

    server.listen(port, ip, () => {
        console.log(`Mock server running! http://${ip}:${port}`)
    })
}
