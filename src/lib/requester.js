const https = require('https')
const http = require('http')

const resolve = require('path').resolve

const { bodyParser, saveJSONFile } = require('./utils')

module.exports = ({ hostname, uri, mockPath, isHttps }) => {
    return new Promise((resolve, _) => {
        const options = {
            hostname,
            port: 443,
            path: uri,
            method: 'GET'
        }

        if (isHttps) {
            const req = https.request(options, async res => {
                const response = await bodyParser(res)
                appendConfig({
                    code: res.statusCode,
                    body: response,
                    mockPath,
                    path: uri
                })
                resolve({ body: response, code: res.statusCode })
            })

            req.end()
        } else {
            options.port = 80
            const req = http.request(options, async res => {
                const response = await bodyParser(res)
                appendConfig({
                    code: res.statusCode,
                    body: response,
                    mockPath,
                    path: uri
                })
                resolve({ body: response, code: res.statusCode })
            })

            req.end()
        }
    })
}

const appendConfig = ({ code, body, mockPath, path }) => {
    const mockConfig = require(resolve(mockPath))
    mockConfig['GET'][path] = {
        body,
        code
    }
    saveJSONFile(mockConfig, mockPath)
}
