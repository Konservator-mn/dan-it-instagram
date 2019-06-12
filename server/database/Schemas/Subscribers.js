const   mongoose = require('../connect');

const subscribersSchema = new mongoose.Schema({
    subscriber: {
        type: mongoose.Schema.ObjectId,
        unique: false,
        required: true
    },
    subscribeTo:{
        type: mongoose.Schema.ObjectId,
        unique: false,
        required: true
    }
});


module.exports = mongoose.model('subscribers', subscribersSchema);

