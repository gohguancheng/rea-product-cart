const express = require("express");
const Router = express.Router();

//import tea cards info
const agentInfo = require("../models/products.js");
const seedAgents = require("../models/products.seed.js");

//* ROUTES
//get "api/product/seed"
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

Router.post("/", async (req, res) => {
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


module.exports = Router;