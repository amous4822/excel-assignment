const mongoose = require("mongoose");

const testScoreSchema = mongoose.Schema({
  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "candidate",
  },
  first_round: {
    type: Number,
    required: true,
  },
  second_round: {
    type: Number,
    required: true,
  },
  third_round: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("test_scores", testScoreSchema)
