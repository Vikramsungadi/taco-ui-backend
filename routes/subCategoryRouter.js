const express = require("express");
const subCategoryController = require("../controllers/subCategoryController");
const router = express.Router();

router.route("/").get(subCategoryController.getAllSubCategories).post(subCategoryController.addSubCategory);
module.exports = router;
