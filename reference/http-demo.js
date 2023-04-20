const http=require('http')

http.createServer((req,res)=>{
    res.write('hello from prachi')
    res.end()
}).listen(5000,()=>{
    console.log('serever is running');
})