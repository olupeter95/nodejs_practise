const http = require('http')

const server = http.createServer( (req, res) => {
    // console.log(req)
    // res.write("welcome to my homepage")
    // res.end()
    if (req.url === "/") {
        res.end("welcome to my homepage")
    }

    if (req.url === "/about") {
        res.end("Here is our short history")
    }

    res.end(
        `<h1>Page not found</h1>`
    )
})

server.listen(5000)