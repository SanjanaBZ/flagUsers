// const mongoose = require('mongoose');

// const reqSchema = mongoose.Schema();

// module.exports = mongoose.model('submissions', reqSchema);


// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
// const Submission = new Schema({
//     username: {type: String},
//     site: {type: String},
//     submission_id:  {    
//         type: String,
//         required: true
//     },
//     problem_id: {type: String},
//     code: {type: String},
//     language: {type: String},
//     verdict: {type: String},
//     created_at: {type: Date},
//     updated_at: {type: Date}
// })

// Submission.index({site: 1 , submission_id: 1} , {unique: true})



// module.exports = mongoose.model('Submission' , Submission);


const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Submission = new Schema({
    username: String,
    site: String,
    submission_id:  {    
        type: String ,
        required: true
    },
    problem_id: String,
    code: String,
    language: String,
    verdict: String,
    created_at: Date,
    updated_at: Date
})

Submission.index({site: 1 , submission_id: 1} , {unique: true})



module.exports = mongoose.model('Submission' , Submission);