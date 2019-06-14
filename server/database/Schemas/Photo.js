const   mongoose = require('../connect');

const photoSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.ObjectId,
        unique: false,
        required: true
    },
    photoUrl:{
        type: String,
        unique: true,
        required: true
    }
});

module.exports = mongoose.model('Photo', photoSchema);



