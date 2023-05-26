const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const componentRouter = require("./routes/componentRouter");
const catgeoryRouter = require("./routes/categoryRouter");
const subCategoryRouter = require("./routes/subCategoryRouter");
const app = express();
// MIDDLEWARES
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// ROUTES
app.use("/api/component", componentRouter);
app.use("/api/category", catgeoryRouter);

module.exports = app;
