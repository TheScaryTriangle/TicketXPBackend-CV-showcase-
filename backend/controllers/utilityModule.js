const asyncHandler = require('express-async-handler');

const getAPIStatus = asyncHandler(async (req, res) => {
    res.status(200).json({
        status: "True"
    })
})

module.exports = {
    getAPIStatus,
}