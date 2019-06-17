const   mongoose = require('../connect'),
ObjectId = mongoose.Schema.Types.ObjectId;

const PostShema = mongoose.Schema(
    {
    author:{
        type:ObjectId,ref:"User",
         required: true
        },

    description:{
        type: String,
        required: true,
        maxlength: 2000
    },

    img:{
         type:String,
         require:true
     },   

    comments:[
         {
             type:ObjectId,ref:"Comment",
              required: false
            }
     ],
    date: {
        type:Date,
        require:true,
        unique:false
    },
    likes:[
        {
            type:ObjectId,ref:"User"
            , required: true
        }
    ]
    }
)
module.exports=mongoose.model("Post",PostShema);