const fs = require('fs')
const path = require('path')


module.exports = async (file) => {
    return new Promise((resolve, reject) => {
        fs.unlink(path.join(__dirname, '..', 'public', 'img/', file), (err) => {
            if (err) reject(err)
            else resolve()
        })
    })
}