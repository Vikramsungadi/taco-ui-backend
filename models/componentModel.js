const mongoose = require("mongoose");

const componentSchema = new mongoose.Schema({
	name: String,
	description: String,
	html: {
		type: String,
		required: true,
	},
	css: String,
	javascript: String,
	react: String,
	size: {
		type: String,
		default: "100vh",
	},
	category: String,
	center: String,
});

const componentModel = mongoose.model("Component", componentSchema);

module.exports = componentModel;
