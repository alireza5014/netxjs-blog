
const express = require('express')
const next = require('next')

const port = 5555
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()
// use file in public folder  like robot.txt and sitemap.xml
    server.use("/", express.static(__dirname + "/public"));

    server.all('*', (req, res) => {
        return handle(req, res)
    })
    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })

})