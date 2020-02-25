const fs = require('fs')

module.exports = {
    bodyParser: req => {
        return new Promise((resolve, reject) => {
            let body = ''
            req.on('data', data => {
                body += data
            })
            req.on('end', () => {
                resolve(JSON.parse(body))
            })
        })
    },
    stringfy: body => {
        return JSON.stringify(body)
    },
    saveJSONFile: (content, path) => {
        fs.writeFileSync(path, JSON.stringify(content, null, 2), 'utf-8')
    }
}
