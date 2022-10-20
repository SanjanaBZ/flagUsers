// var express = require('express');
// var bodyParser = require('body-parser');

// let mongodb = require("mongodb");
// let talentsprint = mongodb.MongoClient;

// const app = express()
// const cors = require("cors");
// const db = require('../DataBase/db')
// app.use(express.json())

// const url  = "mongodb+srv://Harshi_02:HarshiniRayasam@cluster0.p3fiy.mongodb.net/cpStatusTracking?retryWrites=true&w=majority";
// const mongoose = require('mongoose')
// const submissions = require('../models/submissions')

// let FlagUsers = express.Router().get("/",(req,res)=>{
//     mongoose.connect(url, {
//             useNewUrlParser: true, 
//             useUnifiedTopology: true 
//     })
//     .then(() => console.log("Connected Succesfully"))
//     .catch((err) => res.send(err));

//     var data;

//     setTimeout(async () => {
//         let details = new Map();
//         data = await submissions.find({site:'LEETCODE'});
//         // console.log(data);
//         for(const ele in data)
//         {
//             const date = new Date(data[ele]["created_at"]);
//             const seconds = Math.floor(date.getTime());
//             let arr = details[data[ele]["username"]];
//             if(arr === undefined)
//             {
//                 arr = [];
//             }
//             arr.push(seconds);
//             details[data[ele]["username"]] = arr;
//         }
//         // console.log(details["19WH1A1219"]);
//         var userDiff = new Map();
//         for(const user in details)
//         {
//             console.log(user);
//             let arr = details[user];
//             arr.sort();
//             arr.reverse();
//             if(arr.length > 1)
//             {
//                 let diff = arr[0] - arr[1];
//                 if(diff <= 400000)
//                 {
//                     userDiff[user] = diff;
//                 }
//                 // console.log(user, arr[0], arr[1], diff);
//             }
//         }
//         console.log(userDiff);
//         res.send(userDiff)
//     }, 5000);
// });
// module.exports = FlagUsers;



const express = require('express')
const app = express()
const cors = require("cors");
const db = require('../DataBase/db')
app.use(express.json())

const url  = "mongodb+srv://Harshi_02:HarshiniRayasam@cluster0.p3fiy.mongodb.net/cpStatusTracking?retryWrites=true&w=majority";
const mongoose = require('mongoose')
const submissions = require('../models/submissions')

mongoose.connect(url, {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
})
.then(() => console.log("Connected Succesfully"))
.catch((err) => console.log(err));

var data;

setTimeout(async () => {
    let details = new Map();
    data = await submissions.find({site:'LEETCODE'});
    console.log(data);
    for(const ele in data)
    {
        const date = new Date(data[ele]["created_at"]);
        const seconds = Math.floor(date.getTime());
        let arr = details[data[ele]["username"]];
        if(arr === undefined)
        {
            arr = [];
        }
        arr.push(seconds);
        details[data[ele]["username"]] = arr;
    }
    // console.log(details["19WH1A1219"]);
    var userDiff = new Map();
    for(const user in details)
    {
        // console.log(user);
        let arr = details[user];
        arr.sort();
        arr.reverse();
        if(arr.length > 1)
        {
            let diff = arr[0] - arr[arr.length - 1];
            for(const  i=1; i<arr.length; i++)
            {
                diff = min(diff, arr[i]-arr[i-1]);
            }
            userDiff[user] = diff;
            // console.log(user, arr[0], arr[1], diff);
        }
    }
    // console.log(userDiff);
}, 5000);

