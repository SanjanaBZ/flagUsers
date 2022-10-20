// const express = require('express')
// const app = express()
// const cors = require("cors");
// app.use(express.json())

// const url = "mongodb+srv://Harshi_02:HarshiniRayasam@cluster0.p3fiy.mongodb.net/cpStatusTracking?retryWrites=true&w=majority";
// // const url = "mongodb+srv://Rddy:1234@cluster0.56tv7.mongodb.net/cpStatusTracking?retryWrites=true&w=majority";
// const mongoose = require('mongoose')
// const submissions = require('../models/submissions')

// let data = submissions.find();
// console.log(data);

// const mongoose = require('mongoose')

// // mongoose.connect("mongodb+srv://Harshi_02:HarshiniRayasam@cluster0.p3fiy.mongodb.net/cpStatusTracking?retryWrites=true&w=majority",() =>{
// mongoose.connect("mongodb+srv://Reddy:1234@cluster0.56tv7.mongodb.net/cpStatusTracking?retryWrites=true&w=majority",() =>{
//         console.log("DataBase Connected Successfully✔")
// })


const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Harshi_02:HarshiniRayasam@cluster0.p3fiy.mongodb.net/cpStatusTracking?retryWrites=true&w=majority",() =>{
    console.log("DataBase Connected Successfully✔")
})

const db = mongoose.connection

module.exports = db


// console.log(db)
// const submissions = require('./models/submissions')

// let data = submissions.find();
// console.log(data);

// module.exports = db
