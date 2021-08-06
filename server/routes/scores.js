const express = require("express");
const Scores = require("../../models/TestScores");
const Candidate = require("../../models/Candidate");
const { check, validationResult } = require("express-validator");
const router = express.Router();

/**
 * @route   POST api/scores
 * @desc    adding marks based on candidate email
 * @access  public  */

router.post(
  "/",
  [
    check("email", "Please enter a valid email address").isEmail(),
    check(
      "first_round",
      "Scores for first round must be a number between 0 and 10"
    ).isFloat({
      min: 0,
      max: 10,
    }),
    check(
      "second_round",
      "Scores for the second round must be a number between 0 and 10"
    ).isFloat({
      min: 0,
      max: 10,
    }),
    check(
      "third_round",
      "Scores for the third round must be a number between 0 and 10"
    ).isFloat({
      min: 0,
      max: 10,
    }),
  ],
  async (req, res) => {
    const { email, first_round, second_round, third_round } = req.body;

    //checking validation on request body and returning errors
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }

    try {
      let candidateData = await Candidate.findOne({ email });
      if (candidateData === null) {
        return res.status(400).json({ msg: "no such candidate found" });
      }

      let checkCandidateScore = await Scores.findOne({
        candidate: candidateData.id,
      });
      if (checkCandidateScore) {
        return res.status(400).json({ msg: "candidate marks already entered" });
      }

      const newTestScores = new Scores({
        candidate: candidateData.id,
        first_round,
        second_round,
        third_round,
      });

      let result = await newTestScores.save();
      res.send(result);
    } catch (err) {
      res.status(500).json({ msg: "server error" });
      console.log("error in saving scores:", err.message);
    }
  }
);

/**
 * @route   GET api/scores/highest
 * @desc    Getting the highest marks of a candidate
 * @access  public  */

router.get("/highest", async (req, res) => {
  const result = await Candidate.aggregate([
    {
      $lookup: {
        from: "test_scores",
        localField: "_id",
        foreignField: "candidate",
        as: "test_scores",
      },
    },
    {
      $unwind: "$test_scores",
    },
    {
      $project: {
        _id: 0,
        name: 1,
        total: {
          $add: [
            "$test_scores.first_round",
            "$test_scores.second_round",
            "$test_scores.third_round",
          ],
        },
      },
    },
  ])
    .sort({ total: -1 })
    .limit(1);
  res.json({ result });
});

/**
 * @route   GET api/scores/average
 * @desc    Getting the average marks of a all rounds.
 * @access  public  */

router.get("/average", async (req, res) => {
  let totalFirstRound = 0;
  let totalSecondRound = 0;
  let totalThirdRound = 0;
  const result = await Scores.find({});
  result.map((x) => {
    totalFirstRound += x.first_round;
    totalSecondRound += x.second_round;
    totalThirdRound += x.third_round;
  });

  totalFirstRound /= result.length;
  totalSecondRound /= result.length;
  totalThirdRound /= result.length;

  res.json({
    result: {
      avg_first_round: totalFirstRound,
      avg_second_round: totalSecondRound,
      avg_third_round: totalThirdRound,
    },
  });
});

module.exports = router;
