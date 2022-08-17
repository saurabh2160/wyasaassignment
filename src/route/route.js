const express = require('express')
const router = express.Router()
const { registeruser, apiCall } = require('../controller/responseApi')


router.post('/registeruser', registeruser)
router.get('/questionans/:userId', apiCall)
module.exports = router