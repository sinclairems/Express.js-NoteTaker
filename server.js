// BASIC Server Syntax -- Tutorial: Express JS Crash Course by Traversy Media
const express = require('express');
const logger = require('./middleware/logger');
const apiRoutes = require('./routes/apiRoutes')
const htmlRoute = require('./routes/htmlRoute')

// Init express and PORT variable
const app = express();
const PORT = process.env.PORT || 3001;

// // Init Middleware 
app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Set static folder
app.use(express.static('public'));

// Notes API Routes 
app.use('/api', apiRoutes);
app.use('/', htmlRoute);

// Listen on a port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
