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
const notes = require('./db/db.json');
const moment = require('moment');
const fs = require('fs');

// Init express
const app = express();

// This isn't actually hooked up to anything, tutorial used postman to test, I will use insomnia or heroku
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
}

// Init Middleware
app.use(logger);

// This isn't fully functional yet...have a feeling it has something to do with the path
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

const PORT = process.env.PORT || 3001;

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Listen on a port
app.listen(3001, () => console.log(`Server started on port ${PORT}`));