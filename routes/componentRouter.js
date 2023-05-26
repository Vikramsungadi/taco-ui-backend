const express = require("express");
const componentController = require("../controllers/componentController");
const router = express.Router();

router.route("/").get(componentController.getAllComponents).post(componentController.addComponent);
router
	.route("/:id")
	.get(componentController.getComponent)
	.post(componentController.deleteComponent)
	.patch(componentController.updateComponent)
	.delete(componentController.deleteComponent);
module.exports = router;
