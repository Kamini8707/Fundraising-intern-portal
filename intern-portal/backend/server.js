const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

app.get("/api/data", (req, res) => {
  res.json({
    name: "Kamini Prajapati",
    referralCode: "kamini2025",
    donations: 12000,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
