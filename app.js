// import express, body-parser, ejs and lodash to app.js
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const lodash = require("lodash");
const { connect } = require("./config/db");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const { User } = require("./model/user");
connect();
app.use(session({
    secret: 'fsdfds121sdfs1d5sdffsdfs156a',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 },
    store: MongoStore.create({
    mongoUrl: 'mongodb://18.210.16.84:8105/Cook4U',
    dbName: "kodnuey"
    }),
  }));
// set the view engine to ejs
app.set('view engine', 'ejs');

//set the bodyParser to express app
app.use(bodyParser.urlencoded({ extended: true }));

//set the serving static files in the express in a directory named public
app.use('/public', express.static("public"));

// set get require
app.get('/', (req, res) => {
    res.render('home.ejs')
});
app.post('/register', async(req, res) => {
    const {name, email, password} = req.body;
    // const oldUser = await User.findOne({ email: email, password: password });


    const newUser = new User({ name : name ,email :email , password :password });
    newUser.save();
    req.session.userId = newUser.id;

    res.redirect('/')
    console.log(req.session);
  })