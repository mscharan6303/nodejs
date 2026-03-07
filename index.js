let sum = require('./math')
let http = require('http')

let server = http.createServer((req,res)=>{
    res.writeHead(200)

    res.write(`sum = ${sum.add(5,7)}\n`)
    res.write(`sub = ${sum.sub(6,7)}\n`)
    res.write(`mul = ${sum.mul(5,6)}\n`)

    res.end()
})

server.listen(3000,'127.0.0.1',()=>{
    console.log('server run on http://127.0.0.1:3000')
})
