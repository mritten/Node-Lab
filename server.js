const user = require('./quotes')
const http = require("http")

const onRequest = (request, response) => {
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write(`${user.quote()}`)
    response.end();
}

http.createServer(onRequest).listen(3000);