const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());

// Enable CORS for all routes or specific origins (adjust as needed)
app.use(cors());

app.post("/api/place-bid", (req, res) => {
  // Log the received bid amount
  const bidAmount = req.body.bidAmount;
  console.log("Received bid amount:", bidAmount);

  // You can perform further processing or save the bid data to a database here

  // Send a response (optional)
  res.json({ message: "Bid received successfully" });
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
