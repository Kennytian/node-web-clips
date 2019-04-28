const http = require('http');
const fs = require('fs');
const path = require('path');

const host = 'http://192.168.66.124';
const port = 3000;
const fileName = 'Kenny_signed.mobileconfig';

http.createServer((req, res) => {
  if(req.url === '/') {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    const htmlChunk = `<html><body><h1><a href="/download">Kenny锅描述文件</a></h1></body></html>`;
    res.write(htmlChunk);
    res.end();
  } else if(req.url === '/download') {
    res.setHeader('Content-Disposition', 'attachment;filename=' + fileName);
    const filePath = path.resolve(__dirname, fileName);
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } else {
     res.end('Invalid Request!');
  }
}).listen(port);

console.log(`Server running at ${host}:${port}`);
