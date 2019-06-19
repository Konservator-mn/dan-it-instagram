const   mongoose = require('../connect');

const subscribersSchema = new mongoose.Schema({
    subscriber: {
        type: mongoose.Schema.ObjectId,
        unique: false,
        required: true,
        ref: "User"
    },
    subscribeTo:{
        type: mongoose.Schema.ObjectId,
        unique: false,
        required: true,
        ref: "User"
    }
});


module.exports = mongoose.model('subscribers', subscribersSchema);

