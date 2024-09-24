const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/api/flights", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.schiphol.nl/public-flights/flights",
      {
        headers: {
          Accept: "application/json",
          app_id: "502800ec",
          app_key: "942a33c96d6f84ba701c8299fefd44fa",
          ResourceVersion: "v4",
        },
        params: {
          includedelays: false,
          page: 0,
          sort: "+scheduleTime",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching flight data:", error);
    res.status(500).json({ error: "Failed to fetch flight data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
