const express = require('express');
const router = express.Router();
const notes = require('./db.json');
require 

// This isn't fully functional yet...have a feeling it has something to do with the path
router.get('/', (req, res) => res.json(notes));

// Get Single Note
router.get('/:id', (req, res) => {
  const found = notes.some(note => note.id === parseInt(req.params.id));

  if(found) {
    res.json(notes.filter(note => note.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No note with id of ${req.params.id}`});
  }
});



module.exports = router;