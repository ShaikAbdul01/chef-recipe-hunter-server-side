const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const chefs = require("./data/chefs.json");
const chefDetails = require("./data/chefDetails.json");
app.use(cors());
app.get("/", (req, res) => {
  res.send("Server is running");
});
app.get("/chefs", (req, res) => {
  res.send(chefs);
});
app.get("/details", (req, res) => {
  res.send(chefDetails);
});
app.get("/details/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selecteId = chefDetails.find((detail) => detail.chef.id == id);
  res.send(selecteId);
});
app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selecteId = chefDetails.filter((data) => data.chef.id == id);
  res.send(selecteId);
});
app.listen(port, () => {
  console.log(`API is running on port : ${port}`);
});
