const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./client.html', (err, data) => {
        if(err){
            res.end(err);
        }
        else{
            res.write(data);
            res.end();
        }
    })

})
server.listen(3000, () => {
    console.log("Server is running on port 3000");
})