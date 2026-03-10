const express = require("express");
const cors = require("cors");
const ConnectDB = require("./config/configure");
const app = express();
const Router = require("./routes/routes");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Solomon The World is Yours");
});

ConnectDB();
app.use("/api", Router);

app.listen(5000, () => {
  console.log("Solomon Server Run Aguthu!!!");
});
