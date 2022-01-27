"use strict";
/* eslint-env node, es6 */

// Import package
const express = require("express");

// INIT
const PORT = 6300;

// Crée app express

const app = express();

app.get("/", function (req, res) {
  res.send("Hello worldus !");
});

app.listen(PORT, () => {
  console.log(`Serveur démarré : http://localhost:${PORT}`);
});
