
const fs = require('fs')
const path = require('path')

// console.log(path.parse(__filename))

// console.log(path.join(__filename, 'test', '..', '//demo.txt'))

const dir = path.join(__dirname, 'demo')

// fs.mkdir(dir, (err) => {
//     if (err) throw Error(err)
//     console.log('ok')
// })

const file = path.join(__dirname, 'demo', 'new.txt')

const content = 'content2\n'

// fs.writeFile(file, content, (err) => {
//     if (err) throw Error(err)
//     console.log('ok')
// })

// fs.appendFile(file, content, (err) => {
//     if (err) throw Error(err)
//     console.log('ok')
// })

fs.readFile(file, 'utf-8', (err, data) => {
    if (err) throw Error(err)
    console.log(data)
})