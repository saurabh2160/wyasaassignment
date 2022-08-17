const { findOneAndUpdate } = require('../model/userSchema')
const userModel = require('../model/userSchema')
const { questions } = require('./question')

const registeruser = async (req, res) => {
    try {
        const data = req.body
        const { userName } = data
        if (!userName.match(/^[a-zA-Z\s]+$/))
            return res.status(400).send({ status: false, message: "enter valid word (Only alpahabets)" });
        const result = await userModel.create(data)
        return res.status(201).send({ status: true, data: { id: result._id, questions } })
    }
    catch (e) {
        console.log(e);
        res.status(500).send({ status: false, msg: e.message })
    }
}

const apiCall = async (req, res) => {
    try {
        const userId = req.params.userId
        const QN = req.body
        let { q1, q2, q3, q4, q5 } = QN
        for (let i of q1) {
            i = i - 1
            q1[i] = questions[0].options[i]
        }
        for (let i of q2) {
            i = i - 1
            q2 = questions[1].options[i]
        }
        const user = await userModel.findOneAndUpdate(
            { _id: userId },
            { sleepingDetails: { answer: { q1: q1, q2: q2, q3: q3, q4: q4, q5: q5, }, totalScore: 89 } },
            { new: true }
        )
        return res.status(200).send({ status: true, data: user })

    }
    catch (e) {
        console.log(e);
        res.status(500).send({ status: false, msg: e.message })
    }
}

module.exports = { apiCall, registeruser }