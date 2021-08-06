const config = require("./default.json");
const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(config.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = connectDB;
