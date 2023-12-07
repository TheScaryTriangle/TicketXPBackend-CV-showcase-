const express = require('express');
const router = express.Router();
const { getUsers, registerUser, login } = require('../controllers/userModule')

router.route('/GetUsers').get(getUsers).post(getUsers)
router.route('/Register').get(registerUser).post(registerUser)
router.route('/Login').get(login).post(login)

module.exports = router;