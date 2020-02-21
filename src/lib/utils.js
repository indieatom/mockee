module.exports = {
    bodyParser: req => {
        return new Promise((resolve, reject) => {
            let body = ''
            req.on('data', data => {
                body += data
            })
            req.on('end', () => {
                resolve(body)
            })
        })
    },
    stringfy: body => {
        return JSON.stringify(body)
    }
}
