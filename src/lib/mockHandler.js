const { stringfy } = require('./utils')

module.exports = (req, res, config) => {
    const requests = {
        GET: (req, res, config) => {
            return config[req.url]
        },
        POST: (req, res, config) => {
            return config[req.url]
        },
        PUT: (req, res, config) => {
            return config[req.url]
        },
        DELETE: (req, res, config) => {
            return config[req.url]
        }
    }

    const response = requests[req.method](req, res, config[req.method])
    let body
    if (response) {
        res.writeHead(response.code | 201, {
            'Content-Type': 'application/json'
        })
        body = stringfy(response.body)
    } else {
        res.writeHead(404)
        body = '<h1>Endpoint Not Found!</h1>'
    }

    return body
}
