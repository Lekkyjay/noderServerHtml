const http = require('http');
const port = 8000;
const fs = require('fs');
function onRequest(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  fs.readFile('index.html', (err, html)=>{
    if (err) {
      res.statusCode = 404;
      res.write('file not found');
    } else {
      res.write(html);
    }
    res.end();
  });  
}
http.createServer(onRequest).listen(port, ()=> {
  console.log('Server started on port '+port);
});