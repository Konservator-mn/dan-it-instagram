const   mongoose = require('../connect');

const CommentSchema = mongoose.Schema({
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    photo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Photo",
        required: true
    },
    text:{
        type: String,
        required: true,
        maxlength: 2000,
        unique: true
    }
});


module.exports=mongoose.model("Comment",CommentSchema);