const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/fallinlovewith/:thing", (req, res) => {
  let thing = req.params.thing;
  res.render("love", { thing: thing });
});

app.get("/posts", (req, res) => {
  let posts = [
    { title: "Post 1", author: "Susy" },
    { title: "My adorable pet bunny", author: "eldon" },
    { title: "Can you belive this pomsky?", author: "austin" }
  ];

  res.render("posts", { posts: posts });
});

app.listen(port, () => {
  console.log("listening on port", port);
});
