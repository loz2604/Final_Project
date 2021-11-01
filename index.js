require("dotenv").config();

const express = require("express");
const passport = require("passport");
const app = express();

const connection = require("./connection");
// const { registerStrategy, loginStrategy, verifyStrategy } = require("./middleware/auth");



app.use(express.json());
app.use(passport.initialize());
app.use(cors());

app.listen(process.env.HTTP_PORT || 80, () => {
    connection.authenticate();
    console.log("App online");
});


