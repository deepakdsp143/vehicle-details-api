const express = require("express");
const getDetails = require("./getDetails");

const app = express();

// Home route
app.get("/", async (req, res) => {
  const vehicleNumber = req.query.vehicle;

  if (!vehicleNumber) {
    return res.json({
      success: false,
      message: "Please provide vehicle number using ?vehicle=TN01AB1234"
    });
  }

  try {
    const data = await getDetails(vehicleNumber);
    res.json({
      success: true,
      data: data
    });
  } catch (err) {
    res.json({
      success: false,
      error: err.toString()
    });
  }
});

// IMPORTANT: Cloud-safe port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
