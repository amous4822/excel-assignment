const express = require("express");
const Candidate = require("../../models/Candidate");
const { check, validationResult } = require("express-validator");
const router = express.Router();

/**
 * @route   POST api/candidate
 * @desc    input the details of a candidate
 * @access  public  */

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please enter a valid email address").isEmail(),
  ],
  async (req, res) => {
    //checking validation on request body and returning errors
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }

    //creating candidate entry
    const { name, email } = req.body;

    try {
      //finding duplicate entries
      let candidate = await Candidate.findOne({ email });
      if (candidate) {
        return res.status(400).json({ msg: "candidate already exists" });
      }

      candidate = new Candidate({
        name,
        email,
      });

      const resp = await candidate.save();
      res.send(resp);
      
    } catch (err) {
      res.status(500).json({ msg: "server error" });
      console.log("error in storing candidate:", err.message);
    }
  }
);


module.exports = router;
