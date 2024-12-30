//http version
// const http = require('http');

// const sever = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });

//   res.write('<h1>Hello Word');
//   res.end();
// });
// const port = 3000;

// sever.listen(port, () => {
//   console.log(`Node.js http server running in port ${port}`);
// });

//express version
const express = require('express');
const app = express();

const userRoute = reuqire('./routes/users');
const productsRoute = require('./routes/product');

app.use('/users', sue);
app.get('/', (req, res) => {
  res.send('Hello world');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is runing on port${port}`);
});
