const asyncHandler = require('express-async-handler');
const userModel = require('../models/userModel');

const getUsers = asyncHandler(async (req, res) => {
    const users = await userModel.find();
    res.status(200).json(users)
})

const registerUser = asyncHandler(async (req, res) => {
    const requestData = req.body;
    console.log(requestData)

    try {
        const addUserRequest = await userModel.create(
            requestData
        );

        res.status(200).json({
            User: addUserRequest,
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error adding the User' });
    }
})

const getUserById = asyncHandler(async (req, res) => {

})

const login = asyncHandler(async (req, res) => {
    try {
        const userData = await findUserByUsername(req.body.username)
        if (!userData) {
            res.status(200).json("Failed");
        }
        const password = req.body.password;
        if(password == userData.Password){
            res.status(200).json(userData);
        }else{
            res.status(200).json("Failed");
        }

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const findUserByUsername = async (username) => {
    const userData = await userModel.find({ 'Username': new RegExp(username, 'i') }).exec();
    return userData[0]
}

const isUsernameUnique = async (username) => {
    const userData = await userModel.find({ 'Username': new RegExp(username, 'i') }).exec();
    if (userData) {
        return true
    } else {
        return false
    }
}

module.exports = {
    getUsers,
    registerUser,
    getUserById,
    login,
}