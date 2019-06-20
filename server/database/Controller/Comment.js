const Comment = require('../Schemas/Comment'),
    functionExporter = require('../../libs/exporter');


const add = function (authorObjectId, photoObjectId, text){
    return new Promise((resolve, reject)=>{
        let comment = new Comment({
            author: authorObjectId,
            photo: photoObjectId,
            text: text
        });
        comment.save(function (err, comment) {
            if (err) reject(err);
            resolve(comment);
        });
    });
};

const remove = function(commentObjectId){
    return new Promise((resolve, reject)=>{
        Comment.deleteOne({_id:commentObjectId}, function(err){
           if (err) reject(err);
           resolve(true);
        });
    });
};

const get = function (photoObjectId, limit1, limit2) {
    return new Promise((resolve, reject)=>{
        let query = Comment.find({photo:photoObjectId});
        if (limit2 && limit1 && limit1>0 && limit2>limit1){
            query.sort({$natural:1}).limit(limit2).exec(function (err, result){
                if (err) reject (err);
                resolve(result.slice(limit1-1));
            });
            return;
        } else if (limit1 && limit1>0){
            query = query.sort({$natural:1}).limit(limit1);
        }
        query.exec(function (err, result){
            if (err) reject (err);
            resolve(result);
        });
    });
};

const edit = function (commentObjectId, newText) {
    return new Promise((resolve, reject)=>{
        Comment.findOneAndUpdate({_id: commentObjectId}, {text: newText}).exec(function(err){
            if (err) reject(err);
            else {
                Comment.findOne({_id: commentObjectId}).exec(function(err, newComment){
                    if (err) reject(err);
                    resolve(newComment);
                });
            };
        });
    });
};


module.exports = functionExporter(add, remove, get, edit);
