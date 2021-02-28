const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

let note = [];

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, `/public/notes.html`)));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, `/public/index.html`)));

app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, `/db/db.json`)));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, `/public/index.html`)));

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    console.log(newNote);
    // fs.appendFile(`./db/db.json`, newNote, (err) => {
    //     if (err) throw err;
    //     console.log(`data appended`);
    // });
    res.json(newNote);
});

app.listen(PORT, () => console.log(`listening to port ${PORT}`));

//module.exports = main;