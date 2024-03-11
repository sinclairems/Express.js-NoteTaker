// From ClassNotes to get started with the server
// GET / notes should return notes.html
// GET * should return index.html
// Create the following API routes:
// GET /api/notes should read the db.json file and return all saved notes as JSON.
// POST /api/notes should receive a new note to save on the request body, 
// add it to the db.json file, and then return the new note to the client.
// Bonus: DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. 
// This means you'll need to find a way to give each note a unique id when it's saved. 
// In order to delete a note, you'll need to read all notes from the db.json file, remove the note 
// with the given id property, and then rewrite the notes to the db.json file.


// BASIC Server Syntax -- Tutorial: Express JS Crash Course by Traversy Media
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');

// Init express
const app = express();

// // Init Middleware 
// app.use(logger);

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Notes API Routes -- MAYBE SOMETHING OFF HERE
app.use('/api/routes', (require = './routes/api/routes'));

// Listen on a port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


// error message:
// C:\Users\sincl\bootcamp\challenges\Express.js-NoteTaker\node_modules\express\lib\router\index.js:458
      // throw new TypeError('Router.use() requires a middleware function but got a ' + gettype(fn))

// TypeError: Router.use() requires a middleware function but got a string
//     at Function.use (C:\Users\sincl\bootcamp\challenges\Express.js-NoteTaker\node_modules\express\lib\router\index.js:458:13) 
//     at Function.<anonymous> (C:\Users\sincl\bootcamp\challenges\Express.js-NoteTaker\node_modules\express\lib\application.js:220:21)
//     at Array.forEach (<anonymous>)
//     at Function.use (C:\Users\sincl\bootcamp\challenges\Express.js-NoteTaker\node_modules\express\lib\application.js:217:7)   
//     at Object.<anonymous> (C:\Users\sincl\bootcamp\challenges\Express.js-NoteTaker\server.js:30:5)
//     at Module._compile (node:internal/modules/cjs/loader:1376:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
//     at Module.load (node:internal/modules/cjs/loader:1207:32)
//     at Module._load (node:internal/modules/cjs/loader:1023:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)