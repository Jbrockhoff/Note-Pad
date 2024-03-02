const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const uniqid = require("uniqid")

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (error, data) => {
    res.send(data);
  });
});

router.post("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (error, data) => {
    const notes = JSON.parse(data);
    const newNote = req.body;
    newNote.id = uniqid();

    notes.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(notes), (error, data) => {
      res.json(newNote);
    });
  });
});

router.delete("/api/notes/:id", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (error, data) => {
    const notes = JSON.parse(data);
    const updatedNotes = notes.filter(note => note.id !== req.params.id)
    fs.writeFile('./db/db.json', JSON.stringify(updatedNotes), (error, data) => {
      res.json(200);
    });
  });
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
