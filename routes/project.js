const express = require('express')
const create = require('../controllers/project')
const getAll = require('../controllers/project')
const router = express.Router()

router.get('/', getAll)
// router.post('/' ,create )

module.exports = router