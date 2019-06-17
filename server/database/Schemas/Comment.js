const   mongoose = require('../connect'),
ObjectId = mongoose.Schema.Types.ObjectId;

const CommentShema = mongoose.Schema(
{
    author:{type:ObjectId,ref:"User", required: true},
    post:{type:ObjectId,ref:"Post", required: true},
    date:{type: Date,
        required: true},
    text:{type: String,
    required: true,
    maxlength: 2000}
}
)
module.exports=mongoose.model("Comment",CommentShema);