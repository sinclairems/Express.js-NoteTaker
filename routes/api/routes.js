const express = require('express');
const router = express.Router();
const notes = require('../../db/db.json');
const uuid = require('uuid');


// This isn't fully functional yet...have a feeling it has something to do with the path
router.get('/', (req, res) => res.json(notes));

// Get Single Note
router.get('/:id', (req, res) => {
  const found = notes.some(note => note.id === parseInt(req.params.id));

  if(found) {
    res.json(notes.filter(note => note.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ 
      msg: `No note with id of ${req.params.id}`});
  }
});

// Create Note
router.post('/', (req, res) => {
  const newNote = {
    id: uuid.v4(),
    title: req.body.title,
    text: req.body.text,
    created: new Date()
  }
  if(!newNote.title || !newNote.text) {
    return res.status(400).json({ 
      msg: 'Please include a title and text'});
  } 
  notes.push(newNote);
  //res.json(notes); // returns json format
  res.redirect('/notes'); // returns html format
});

// Update Note
router.get('/:id', (req, res) => {
  const found = notes.some(note => note.id === parseInt(req.params.id));

  if(found) {
    const updNote = req.body;
    notes.forEach(note => {
      if(note.id === parseInt(req.params.id)) {
        note.title = updNote.title ? updNote.title : note.title;
        note.text = updNote.text ? updNote.text : note.text;

        res.json({ msg: 'Note updated', note });
      }
    });
    res.json(notes.filter(note => note.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ 
      msg: `No note with id of ${req.params.id}`});
  }
});

// Delete Note
router.delete('/:id', (req, res) => {
  const found = notes.some(note => note.id === parseInt(req.params.id));

  if(found) {
    res.json({ 
      msg: 'Note deleted', 
      notes: notes.filter(note => note.id !== parseInt(req.params.id))});
  } else {
    res.status(400).json({ 
      msg: `No note with id of ${req.params.id}`});
  }
});


module.exports = router;