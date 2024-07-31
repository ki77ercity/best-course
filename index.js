
const fs = require('fs')
const readerStream = fs.createReadStream('package.json')

let data
readerStream
.setEncoding('UTF-8')
.on('data', (chank) => {
    data += chank
})
.on('end', () => {
    console.log('end', data)
})


const content = 'content\n'

const writeStream = fs.createWriteStream('output.txt')
writeStream.write(content, 'UTF-8')
writeStream.end()

writeStream.on('finish', () => {
    console.log('finish')
})

writeStream.on('close', () => {
    console.log('close')
})

writeStream.on('error', () => {
    console.log('error')
})

let readerStream1 = fs.createReadStream('package.json')
let writeStream1 = fs.createWriteStream('output.txt')

readerStream1.pipe(writeStream1)

// console.log(path.parse(__filename))

// console.log(path.join(__filename, 'test', '..', '//demo.txt'))

// const dir = path.join(__dirname, 'demo')

// fs.mkdir(dir, (err) => {
//     if (err) throw Error(err)
//     console.log('ok')
// })

// const file = path.join(__dirname, 'demo', 'new.txt')

// const content = 'content2\n'

// fs.writeFile(file, content, (err) => {
//     if (err) throw Error(err)
//     console.log('ok')
// })

// fs.appendFile(file, content, (err) => {
//     if (err) throw Error(err)
//     console.log('ok')
// })

// fs.readFile(file, 'utf-8', (err, data) => {
//     if (err) throw Error(err)
//     console.log(data)
// })