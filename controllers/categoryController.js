const Category = require("../models/categoryModel");

exports.getAllCategories = async (req, res) => {
	const data = await Category.find();
	res.json(data);
};

exports.addCategory = async (req, res) => {
	await Category.create(req.body);
	res.status(201).send({
		status: "Success",
		Category,
	});
};
exports.updateCategory = async (req, res) => {
	const { name } = req.body;
	try {
		await Category.updateOne({ _id: req.params.id }, { name: name });
		res.status(200).send({
			status: "Success",
			Category,
		});
	} catch (err) {
		console.log(err);
	}
};
exports.deleteCategory = async (req, res) => {
	try {
		await Category.deleteOne({ _id: req.params.id });
		res.status(200).send({
			status: "Deletion Success",
		});
	} catch (err) {
		console.log(err);
	}
};
