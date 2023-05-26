const Component = require("../models/componentModel");

exports.getAllComponents = async (req, res) => {
	try {
		if (Object.keys(req.query).length !== 0) {
			const data = await Component.find({ ...req.query });
			return res.json(data);
		}
		const data = await Component.find();
		console.log(data.length);
		res.json(data);
	} catch (err) {
		console.log(err);
	}
};
exports.getComponent = async (req, res) => {
	try {
		const data = await Component.find({ _id: req.params.id });
		res.json(data);
	} catch (err) {
		console.log(err);
	}
};

exports.addComponent = async (req, res) => {
	try {
		await Component.create(req.body);
		res.status(201).send("Success");
	} catch (err) {
		console.log(err);
	}
};
exports.updateComponent = async (req, res) => {
	try {
		await Component.updateOne({ _id: req.params.id }, { ...req.body });
		res.status(200).send("Success");
	} catch (err) {
		console.log(err);
	}
};
exports.deleteComponent = async (req, res) => {
	try {
		await Component.deleteOne({ _id: req.params.id });
		res.status(204).send("Deleted");
	} catch {
		console.log(err);
	}
};
