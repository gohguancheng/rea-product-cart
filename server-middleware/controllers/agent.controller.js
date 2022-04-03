const express = require("express");
const Router = express.Router();

// import models info
const agentInfo = require("../models/products.js");
const seedAgents = require("../models/products.seed.js");

//* ROUTES
// get "api/product/seed"
Router.get("/seed", async (req, res) => {
  try {
    await agentInfo.deleteMany({});
    const seedCards = await agentInfo.create(seedAgents);
    res.status(200).json({
      status: "ok",
      message: "seeded",
      data: seedCards,
    });
  } catch (error) {
    console.log("at GET api/product/seed", error);
  }
});

Router.get("/", async (req, res) => {
  try {
    const v = await agentInfo.find({forVisits: true})
    const c = await agentInfo.find({forCalls: true})
    res.status(200).json({
      status: "ok",
      message: "data received",
      visits: v,
      calls: c,
    });
  } catch (error) {
    console.log("at GET api/product/", error);
  }
});

Router.post("/new", async (req, res) => {
  console.log('new agent!')
  try {
    const input = req.body;
    const newEntry = await agentInfo.create(input);
    res.status(200).json({
      status: "ok",
      message: "agent added",
      data: newEntry,
    });
  } catch (error) {
    console.log("at POST api/product/new", error);
  }
});


module.exports = Router;