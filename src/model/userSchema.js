const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    sleepingDetails: {
        totalScore: {
            type: Number,
            default: 0
        },
        answer: {
            q1: [{
                type: String,
                default: "",
                enum: [1, 2, 3]
            }],
            q2: {
                type: String,
                default: ""
            },
            q3: {
                type: String,
                default: ""
            },
            q4: {
                type: String,
                default: ""
            },
            q5: {
                type: String,
                default: ""
            }
        }
    }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)