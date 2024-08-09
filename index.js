const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

dotenv.config();
const port = process.env.PORT || 3000;

app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Function to log a message every 10 seconds
function logMessage() {
    let message = `Service running - ${Math.floor(Date.now() / 1000)}`;
    console.log("Service Logs");
    console.log("Service Log Data");
  console.log(message);
}

// Set interval to log message every 10 seconds
setInterval(logMessage, 10000);
