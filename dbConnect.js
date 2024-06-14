const mongoose = require("mongoose");

module.exports = async () => {
  const mongoUri =
    "mongodb+srv://mayankbisht:IT8V5bYZgagdTxQK@socialmedia.bxamrdg.mongodb.net/?retryWrites=true&w=majority&appName=socialMedia";

  try {
    mongoose.set("strictQuery", false);
    const connect = await mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
