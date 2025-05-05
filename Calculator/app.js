const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'calculator.html'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading the HTML file.');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);  
      }
    });
  }
 
  else if (req.url === '/calculator.css') {
    fs.readFile(path.join(__dirname, 'calculator.css'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading the CSS file.');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(data);  
      }
    });
  }
 
  else if (req.url === '/calculator.js') {
    fs.readFile(path.join(__dirname, 'calculator.js'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading the JS file.');
      } else {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.end(data); 
      }
    });
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Project 1 running on port 3000');
});
