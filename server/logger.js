const winston = require("winston");
require("winston-mongodb");
require("dotenv").config(); // Load environment variables

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
    new winston.transports.File({ filename: "logs.log" }),
    new winston.transports.MongoDB({
      db: process.env.MONGO_URI || "mongodb://localhost:27017/studentDB", // Fallback if .env is missing
      collection: "logs",
      level: "info",
    }),
  ],
});

module.exports = logger;
