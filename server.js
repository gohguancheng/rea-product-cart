const path = require("path");

//express
const express = require("express");
const app = express();

//mongoose
const mongoose = require("mongoose");
const db = mongoose.connection;

//.env import and configuration
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const mongoURI = process.env.MONGODB_URI;

//import controllers
const agentController = require("./controllers/agent.controller.js");

//connect to mongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true });
mongoose.connection.once("open", () => {
  console.log("connected to mongoose successfully!");
});

db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("connected", () => console.log("mongo database connected successfully!"));
db.on("disconnected", () => console.log("mongo database disconnected"));

//app middleware
app.use(express.static(path.join(__dirname, "./frontend/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route middleware
app.use("/api/product/", agentController);


//for build
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log("listening on port: " + PORT);
});