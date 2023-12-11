const router = require("./routes/compoundRoutes");
const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 8080;

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync()
.then(() => {
    console.log("DB synced succesfully!");
})
.catch((err) => {
    console.error("Failed to Sync DB: " + err.message);
});

app.use("/api/compound", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});