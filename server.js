const express = require("express");
const connectDB = require("./server/db/db");
const candidate = require("./server/routes/candidate");
const scores = require("./server/routes/scores");
const app = express();
connectDB();

app.use(express.json({ extended: false }));
const PORT = process.env.PORT || 5000;

app.use("/api/candidate", candidate);
app.use("/api/scores", scores);

app.get("/", (req, res) => {
  res.status(200).send("Server working, go on to the api");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
