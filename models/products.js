const mongoose = require("mongoose");

const agent_Schema = new mongoose.Schema({
    name:{type: String, required: true},
    forCalls: {type: Boolean, default: false},
    forVisits: {type: Boolean, default: false},
    callPriceSGD: {type: Number, required: true, default: 0},
    visitPriceSGD: {type: Number, required: true, default: 0},
},
{
    timestamps: true
}
);

module.exports = mongoose.model("agent", agent_Schema);