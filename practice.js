// BASIC Server Syntax -- Tutorial: Express JS Crash Course by Traversy Media
const express = require('express');

// Init express
const app = express();

// Create you endpoints/route handlers
app.get('/', function(req, res){
  res.send('Hello World');
});

// Listen on a port
app.listen(3001);