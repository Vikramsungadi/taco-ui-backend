const subCategory = require("../models/subCategoryModel");

exports.getAllSubCategories = async (req, res) => {
	const data = await subCategory.find();
	// console.log(data);
	res.json(data);
};

exports.addSubCategory = async (req, res) => {
	await subCategory.create(req.body);
	res.status(201).send({
		status: "Success",
		data: req.body,
	});
};
