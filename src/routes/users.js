const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user_controller.js')
const userValidation = require('../validators/user.validator')


router.get('/', UserController.index)
router.post('/store', userValidation, UserController.store);

module.exports = router;