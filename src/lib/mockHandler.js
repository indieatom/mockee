const { bodyParser, stringfy } = require('./utils')

module.exports = (req, res, config) => {
    const requests = {
        GET: (req, res, config) => {
            let response = config[req.url]
            if (response) {
                res.writeHead(response.code | 201, {
                    'Content-Type': 'application/json'
                })
                res.end(stringfy(response.body))
            } else {
                res.writeHead(404)
                res.end('')
            }
        },
        POST: (req, res, config) => {
            let response = config[req.url]
            if (response) {
                res.writeHead(response.code | 201, {
                    'Content-Type': 'application/json'
                })
                res.end(stringfy(response.body))
            } else {
                res.writeHead(404)
                res.end('')
            }
        },
        PUT: (req, res, config) => {
            let response = config[req.url]
            if (response) {
                res.writeHead(response.code | 201, {
                    'Content-Type': 'application/json'
                })
                res.end(stringfy(response.body))
            } else {
                res.writeHead(404)
                res.end('')
            }
        },
        DELETE: (req, res, config) => {
            let response = config[req.url]
            if (response) {
                res.writeHead(response.code | 201, {
                    'Content-Type': 'application/json'
                })
                res.end(stringfy(response.body))
            } else {
                res.writeHead(404)
                res.end('')
            }
        }
    }

    requests[req.method](req, res, config[req.method])
}
