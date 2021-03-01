const express = require('express');
const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');

const app = express();
const PORT = process.env.PORT || 3000;

const note = [];

//------------------------
//on initialisation, pushes db.json to note[]
const y = () => {
fs.readFile(`./db/db.json`, 'utf8', (err, data) => {
    if (err) console.error;
    let x = JSON.parse(data);
    for (i = 0; i < x.length; i++) {
            note.push(x[i]);
        }
    })
}

y()
//-------------------------



app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, `/public/notes.html`)));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, `/public/index.html`)));

app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, `/db/db.json`)));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, `/public/index.html`)));

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    note.push(newNote);
    res.json(newNote);
    fs.writeFile(`./db/db.json`, JSON.stringify(note), (err) => {
        if (err) throw err;
        console.log(`done`)
    })
});

app.listen(PORT, () => console.log(`listening to port ${PORT}`));
