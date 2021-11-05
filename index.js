require("dotenv").config();

const express = require("express");
const passport = require("passport");
const app = express();
const cors = require("cors");

const connection = require("./connection");
const { registerStrategy, loginStrategy, verifyStrategy } = require("./middleware/auth");

const User = require("./models/user");
const { Orders, OrderInfo } = require("./models/order");
const userRouter = require("./routes/user");
const orderRouter = require("./routes/order");
const registerError = require("./middleware/errors");

app.use(express.json());
app.use(cors());
app.use(passport.initialize());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

passport.use("register", registerStrategy);
passport.use("login", loginStrategy);
passport.use(verifyStrategy);

app.use("/test", (req, res) => {
  res.send("Hello World!")
});
app.use("/user", userRouter);
app.use("/orders", orderRouter);
app.use(registerError);

app.listen(process.env.PORT, async () => {
  connection.authenticate();
  await User.sync({ alter: true });
  await Orders.sync({ alter: true });
  await OrderInfo.sync({ alter: true });
  console.log("App online");

});






