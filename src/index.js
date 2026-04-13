const http = require("node:http");



const PORT = Number(process.env.PORT) || 3000;

const APP_NAME = "new-repository-app";



const server = http.createServer((req, res) => {
  
  if (req.method === "GET" && req.url === "/health") {
    
    res.writeHead(200, { "Content-Type": "application/json" });
    
    res.end(JSON.stringify({ status: "ok", app: APP_NAME }));
    
    return;
    
  }
  

  
  if (req.method === "GET" && req.url === "/") {
    
    res.writeHead(200, { "Content-Type": "application/json" });
    
    res.end(
      
      JSON.stringify({
        
        message: "Welcome to new-repository-app",
        
        version: "1.0.0"
          
      })
      
    );
    
    return;
    
  }
  

  
  res.writeHead(404, { "Content-Type": "application/json" });
  
  res.end(JSON.stringify({ error: "Not Found" }));
  
});



if (require.main === module) {
  
  server.listen(PORT, () => {
    
    console.log(`${APP_NAME} running at http://localhost:${PORT}`);
    
  });
  
}



module.exports = { server };

























