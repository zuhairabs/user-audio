const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const uploadRouter = require("./routes/upload");
const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");

const PORT = process.env.PORT || 3000;

const app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'html');

const directory = path.join(__dirname, "/uploads");
app.use("/uploads", express.static(directory));

// Databse Connection
const connectDB = require("./config/db");
connectDB();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Cors
//app.use(cors)
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:5000",
    "http://localhost:3300",
    "http://localhost:3001",
  ],
};
app.use(cors(corsOptions));

// docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/uploadFile", uploadRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.listen(PORT, function () {
  console.log("APP IS RUNNING ON PORT " + PORT);
});
