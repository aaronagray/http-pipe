var http = require('http')
var server = http.createServer(function (req, res) {
  console.log(req.method)
  req.pipe(res)
});

server.listen(3000, function() {
  console.log('server listening on 3000')
})
