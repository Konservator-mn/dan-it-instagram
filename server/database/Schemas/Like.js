const   mongoose = require('../connect');

const LikeSchema = mongoose.Schema({
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    photo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Photo",
        required: true
    }
});

module.exports = mongoose.model('Like', LikeSchema);