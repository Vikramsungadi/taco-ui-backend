const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
	category: {
		type: String,
		required: true,
	},
	subCategories: {
		type: String,
		required: true,
	},
});

const subCategoryModel = mongoose.model("SubCategory", subCategorySchema);

module.exports = subCategoryModel;
