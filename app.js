const express = require("express");
const app = express();
app.set("views", "./views");
app.set("view engine", "pug");
const port = 80;

app.use(express.static("public"));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'))


app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost`);
});
