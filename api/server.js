const express = require('express');
const cors = require('cors');
const notes = require('./notes');
const PouchDB = require('pouchdb');

const app = express();

// prod db
// const db = new PouchDB('http://localhost:3000/notes');
// dev db
const db = new PouchDB('notes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/api/v1/notes', (req, res) => {
  console.log('Requested all notes');
  db.allDocs({include_docs: true})
    .then((notes) => {
      res.send(notes.rows.map(n => {
        return {
          id: n.doc.id,
          title: n.doc.title,
          body: n.doc.body
        }
      }));
    });
});

app.get('/api/v1/notes/:noteId', (req, res) => {
  console.log('Requested note with id ' + req.params['noteId']);
  db.allDocs({include_docs: true})
    .then((notes) => {
      let note = notes.rows.find(n => n.id == +req.params['noteId']);
      res.send({
            id: note.doc.id,
            title: note.doc.title,
            body: note.doc.body
          });
    });
});

app.post('/api/v1/notes/:title/:body', (req, res) => {
  console.log('Requested a note creation');
  db.allDocs({include_docs: true}).then(notes => {
    return notes.rows.sort((a, b) => a.id - b.id);
  }).then(notes => {
    const note = {
      _id: `${+notes[notes.length - 1].id + 1}`,
      id: +notes[notes.length - 1].id + 1,
      title: req.params['title'],
      body: req.params['body']
    }
    db.put(note);
    res.send([note]);
  });
});

app.put('/api/v1/notes/:noteId/:title/:body', (req, res) => {
  console.log('Requested update the note with id ' + req.params['noteId']);
  db.get(`${req.params['noteId']}`)
    .then(note => {
      note.title = req.params['title'];
      note.body = req.params['body'];
      return note;
    })
    .then(note => {
      db.put(note);
      res.send([{id: note.id, title: note.title, body: note.body}]);
    });
});

app.delete('/api/v1/notes/:noteId', (req, res) => {
  console.log('Requested delete the note with id ' + req.params['noteId']);
  db.get(`${req.params['noteId']}`)
    .then(note => db.remove(note))
    .then(note => res.send([note]));
});

app.listen(3000, ()=> {
  console.log("The API is ready and listening on port 3000");
});