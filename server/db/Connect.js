const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    connectTimeoutMS: 6000000, // 1hr 40min
    socketTimeoutMS: 6000000, // 1hr 40min
  });
};

module.exports = connectDB;
