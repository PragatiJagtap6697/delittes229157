var http=require("http");
var server =http.createServer(function(req,res)
{
console.log("req.request"+req.request ,+"Request method: "+req.method);
res.write("welcome");
});
server.listen(5050);
console.log("sever is running on port no 5050");