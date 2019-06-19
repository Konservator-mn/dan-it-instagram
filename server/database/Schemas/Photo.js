const   mongoose = require('../connect');

const photoSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        unique: false,
        required: true
    },
    url:{
        type: String,
        unique: true,
        required: true
    },
    format: {
        type: String,
        unique: false,
        required: true
    },
    public_id: {
        type: String,
        unique: true,
        required: true
    }
});

module.exports = mongoose.model('Photo', photoSchema);



