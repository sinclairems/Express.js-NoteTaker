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

const express = require('express');
const notes = require('./db.json');

const PORT = 3001;

const app = express();

// GET route to get all of the terms
app.get('/api/notes', (req, res) => res.json(notes));

// GET route that returns any specific term
app.get('/api/notes/:note', (req, res) => {
  // Coerce the specific search term to lowercase
  const requestedTerm = req.params.term.toLowerCase();

  // Iterate through the terms name to check if it matches `req.params.term`
  for (let i = 0; i < notes.length; i++) {
    if (requestedTerm === notes[i].term.toLowerCase()) {
      return res.json(notes[i]);
    }
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No match found');
});

// Fallback route for when a user attempts to visit routes that don't exist
app.get('*', (req, res) =>
  res.send(
    `Make a GET request using Insomnia to <a href="http://localhost:${PORT}/api/terms">http://localhost:${PORT}/api/terms</a>`
  )
);

// Listen for connections
app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT}`)
);