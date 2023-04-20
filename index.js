const http=require('http')
const path=require('path')
const fs=require('fs')

const server=http.createServer((req,res)=>{

let filePath=path.join(__dirname,'public',req.url==='/' ? 'index.html':req.url)

//checking extension name
let extName=path.extname(filePath)
// console.log(extName);

//initial content type
let contentType='text/html';

//checking ext and set content type
switch(extName){
    case '.js':
        contentType='text/javascript';;
        break;
    case '.css':
        contentType='text/css';
        break;
    case '.json':
        contentType='application/json';
        break;
    case '.png':
        contentType='image/png';
        break;
    case '.jpg':
        contentType='image/jpg'
        break;
}

//Read file
 fs.readFile(filePath,(err,content)=>{
    if(err){
        if(err.code=='ENOENT'){
            //page not found
            fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{
                res.writeHead(200,{'Content-Type':'text/html'})
                res.end(content,'utf8')
            })
        }else{
            //some server error
            res.writeHead(500);
            res.end(`Server error: ${err.code}`)
        }
    }else{
        //Success  
        res.writeHead(200,{'Content-Type':contentType})
        res.end(content,'utf-8')
    }
 })
})

const PORT = process.env.PORT || 5000;

server.listen(PORT,()=>console.log(`Server is running on ${PORT} `));