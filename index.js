const express = require("express");
const path = require("path");

const contactFormHandler = require("./helpers/contact.helper");

const port = process.env.PORT ? process.env.PORT : "3001";

const app = express();

app.listen(port, () => console.log(`Server up on ${port}`));

app.use(express.static(path.join(__dirname, "Test")));

app.use(express.urlencoded({ extended: false }));

app.use((_req, res) => {
  const page = path.join(__dirname, "Test", `${_req.path}.html`);
  res.sendFile(page);
});