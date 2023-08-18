const express = require("express");
const app = express();

const port = process.env.PORT || 6000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi from EC2 ubuntu!");
});

app.get("/greetings", (req, res) => {
  res.status(200).send(JSON.stringify({"Greetings": "Harish welcomes you!"}));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
    console.log(`http://localhost:${port}/`);
});
