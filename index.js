require("dotenv").config();

const express = require("express");
const passport = require("passport");
const app = express();
const cors = require("cors");

const connection = require("./connection");
const { registerStrategy, loginStrategy, verifyStrategy } = require("./middleware/auth");

const User = require("./models/user");

const userRouter = require("./routes/user");

app.use(express.json());
app.use(cors());
app.use(passport.initialize());


passport.use("register", registerStrategy);
passport.use("login", loginStrategy);
passport.use(verifyStrategy);

app.use("/user", userRouter)

app.listen(process.env.PORT, async () => {
    connection.authenticate();
    await User.sync({ alter: true });
    console.log("App online");
});


