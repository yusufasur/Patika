const http = require("http");
const port = 5000;

const server = http.createServer((req, res) => {
  const { url } = req;

  res.writeHead(200, { "content-type": "text/html" });

  let content;

  if (url === "/") content = "<h2>INDEX PAGE</h2>";
  else if (url === "/about") content = "<h2>ABOUT PAGE</h2>";
  else if (url === "/contact") content = "<h2>CONTACT PAGE</h2>";
  else {
    res.writeHead(404, { "content-type": "text/html" });
    content = "<h2>404 PAGE NOT FOUND</h2>";
  }

  res.end(content);
});

server.listen(port, () => console.log(`Server starts on Port: ${port}`));
