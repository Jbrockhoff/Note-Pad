const express = require("express");
const PORT = 3001;
const api = require('./routes/index');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(api);




app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

//landing page has link to notes page
//Existing notes stored and logged on the left
//Empty fields exist to enter:
//    new note
//    new title
//when entering new note, 'save' and 'clear' buttons appear in nav at the top

