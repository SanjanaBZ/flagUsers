let express = require("express");
let bodyparser = require("body-parser");
let cors = require("cors");
let app = express();
app.use(express.static(__dirname + "/flag-users-frontend/build"));

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.listen(3000);

const url  = "mongodb+srv://Harshi_02:HarshiniRayasam@cluster0.p3fiy.mongodb.net/cpStatusTracking?retryWrites=true&w=majority";
const mongoose = require('mongoose')
const submissions = require('./models/submissions')

app.get("/api/data", (req, res) => {
    try{
        mongoose.connect(url, {
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        })
        .then(() => console.log("Connected Succesfully"))
        .catch((err) => console.log(err));

        var data;

        var sites = ["LEETCODE", "CODECHEF", "CODEFORCES", "HACKERRANK", "HACKEREARTH"];

        setTimeout(async () => {
            let siteDetails = new Map();
            for(const site in sites)
            {
                siteDetails[sites[site]] = new Map();
            }
            data = await submissions.find({});
            for(const ele in data)
            {
                const date = new Date(data[ele]["created_at"]);
                const seconds = Math.floor(date.getTime());
                let details = siteDetails[data[ele]["site"]];
                if(details == undefined)
                {
                    details = new Map();
                }
                let arr = details[data[ele]["username"]];
                if(arr == undefined)
                {
                    arr = [];
                }
                arr.push(seconds);
                details[data[ele]["username"]] = arr;
                siteDetails[data[ele]["site"]] = details;
            }

            var timegap = new Map();
            
            for(const site in siteDetails)
            {
                var users = new Map();
                const userDetails = siteDetails[site];
                for(user in userDetails)
                {
                    var data = userDetails[user];
                    data.sort();
                    data.reverse();
                    var diff = 0;
                    if(data.length > 1)
                    {
                        diff = data[0] - data[1];
                    }
                    users[user] = diff;
                }
                timegap[site] = users;
            }

            console.log(timegap);
            res.send(timegap);
            // let details = new Map();
            // data = await submissions.find({});
            // // console.log(data);
            // for(const ele in data)
            // {
            //     const date = new Date(data[ele]["created_at"]);
            //     const seconds = Math.floor(date.getTime());
            //     let arr = details[data[ele]["username"]];
            //     if(arr === undefined)
            //     {
            //         arr = [];
            //     }
            //     arr.push(seconds);
            //     details[data[ele]["username"]] = arr;
            // }
            // // console.log(details["19WH1A1219"]);
            // var userDiff = new Map();
            // for(const user in details)
            // {
            //     console.log(user);
            //     let arr = details[user];
            //     arr.sort();
            //     arr.reverse();
            //     if(arr.length > 1)
            //     {
            //         let diff = arr[0] - arr[1];
            //         if(diff <= 400000)
            //         {
            //             userDiff[user] = diff;
            //         }
            //         // console.log(user, arr[0], arr[1], diff);
            //     }
            // }
            // res.send(userDiff);
            // console.log(userDiff);
        }, 500);
    }
    catch
    {
        res.send({success : flase})
    }
})
app.get("/*", async (req, res) => {
    res.sendFile(process.cwd() + "/flag-users-frontend/build/index.html");
})
console.log("Server listening to port no.3000");