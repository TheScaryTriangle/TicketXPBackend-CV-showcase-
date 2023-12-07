const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        Username: {
            type: String,
            required: true,
        },
        Password: {
            type: String,
            required: true,
        },
        WalletAddress: {
            type: String,
            // required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('userSchema', userSchema);
