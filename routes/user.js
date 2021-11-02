const router = require("express").Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/user");

const session = { session: false };

const profile = (req, res, next) => {
    res.status(200).json({ msg: "Profile", user: req.user, token: req.query.secret_token });
};

const register = (req, res, next) => {
    req.user.email ? res.status(201).json({ msg: "Registered", user: [req.user] }) : res.status(401).json({ msg: "User Already Exists" });
};

const login = async (req, res, next) => {
    passport.authenticate("login", async (err, user, info) => {
        try {
            if (err) {
                res.status(500).json({ msg: "Internal Server Error" });
            } else if (!user) {
                res.status(401).json({ info });
            } else {
                const loginFn = async (error) => {
                    if (error) {
                        return next(error);
                    } else {
                        const userData = { id: user.id, email: user.email };
                        const data = { user, token: jwt.sign({ user: userData }, process.env.SECRET_KEY) };
                        res.status(200).json(data);
                    }
                };
                req.login(user, session, loginFn)
            }
        } catch (error) {
            return next(error);
        }
    })(req, res, next);
};


router.get("/", passport.authenticate("jwt", session), profile);
router.post("/register", passport.authenticate("register", session), register);
router.post("/login", login);

module.exports = router;