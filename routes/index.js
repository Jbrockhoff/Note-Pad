const router = require("express").Router();
const path = require("path");
const fs = require("fs");

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (error, data) => {
    console.log(error);
    console.log(data);
    res.send(data);
  });
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
