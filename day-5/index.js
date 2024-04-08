import http from "http";
import url from "url";
import fs from "fs";


const server=http.createServer((req,res) => {
    const parseUrl=url.parse(req.url,true);

    if(parseUrl.pathname === "/" && req.method === "GET"){
    
        fs.readFile('home.html',(err, data) => {
            if (err) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Internal Server Error');
            } 
            else{
              res.writeHead(200, { 'Content-Type': 'text/html' });
              res.end(data);
            }
          });
    }
   else  if(parseUrl.pathname === "/about" && req.method === "GET"){
    
    fs.readFile('about.html',(err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        } 
        else{
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });

    }
   else  if(parseUrl.pathname === "/contact" && req.method === "GET"){
    fs.readFile('contact.html',(err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        } 
        else{
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
        
}

});

server.listen(5005,()=>{
    console.log("www.local:5000");
});