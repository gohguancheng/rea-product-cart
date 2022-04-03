const mongoose = require("mongoose");

const agent_seeds = [
  {
    _id: new mongoose.Types.ObjectId,
    name: 'Sandra',
    forCalls: true,
    forVisits: false,
    callPriceSGD: 150,
    visitPriceSGD: 200,
  },
  {
    _id: new mongoose.Types.ObjectId,
    name: 'Bob',
    forCalls: true,
    forVisits: true,
    callPriceSGD: 100,
    visitPriceSGD: 200,
  },
  {
    _id: new mongoose.Types.ObjectId,
    name: 'Alfred',
    forCalls: true,
    forVisits: true,
    callPriceSGD: 200,
    visitPriceSGD: 300,
  },
  {
    _id: new mongoose.Types.ObjectId,
    name: 'Daphne',
    forCalls: true,
    forVisits: true,
    callPriceSGD: 100,
    visitPriceSGD: 400,
  },
  {
    _id: new mongoose.Types.ObjectId,
    name: 'Zachary',
    forCalls: true,
    forVisits: true,
    callPriceSGD: 100,
    visitPriceSGD: 120,
  },
];

module.exports = agent_seeds;