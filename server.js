const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

app.get("/api", (req, res) => {
	res.json({ message: "Welcome to taco" });
});

// mongoose.connect(process.env.DB_LOCAL).then(() => console.log("Connected to Local DB"));
mongoose.connect(process.env.DB_PROD).then(() => console.log("Connected to Online DB"));

app.listen(3030, () => {
	console.log("Running at http://localhost:3030/api");
});
