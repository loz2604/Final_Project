require("dotenv").config();

const express = require("express");
const passport = require("passport");
const app = express();
const cors = require("cors");
const connection = require("./connection");
// const { registerStrategy, loginStrategy, verifyStrategy } = require("./middleware/auth");



app.use(express.json());
app.use(cors());
app.use(passport.initialize());

app.listen(process.env.PORT || 80, () => {
    connection.authenticate();
    console.log("App online");
});


