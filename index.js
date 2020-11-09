const express = require("express");
const app = express();
const path = require("path");




app.use(express.static("build"));

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(8080, () => console.log("server running"));
