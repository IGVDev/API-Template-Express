const mongoose = require("mongoose");
require("dotenv").config({ path: "config\\.env" });

// Database connection
const connectDb = async () => {
  try {
    mongoose.connect(
      process.env.NODE_DB_STRING,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        tlsInsecure: true,
      },
      null
    );
    console.log("Connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

mongoose.connection.on("error", (err) => {
  console.error(`Database Error: ${err.message}`);
});

module.exports = { connectDb };
