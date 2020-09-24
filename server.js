const { buildQueries } = require("@testing-library/react");
const express = require("express");
const path = require("path");

const server = express();

server.use(express.static(path.join(__dirname, "build")));

server.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

server.listen(4000, () => {
  console.log("server is listeining at pot 4000");
});
