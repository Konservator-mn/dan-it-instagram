const   Like = require('../Schemas/Like'),
        functionExporter = require('../../libs/exporter');

const add = function (userObjectId, photoObjectId) {
    return new Promise((resolve, reject)=>{
        Like.findOne({author: userObjectId, photo: photoObjectId}).exec(function (err, result) {
            if (err) reject(err);
            if (!result){
                let like = new Like({author: userObjectId, photo: photoObjectId});
                like.save(function(err){
                    if (err) reject(err);
                    resolve(true);
                });
            } else {
                resolve(true);
            }
        });
    });
};

const removeOne = function (userObjectId, photoObjectId) {
    return new Promise((resolve, reject)=>{
        Like.deleteOne({author: userObjectId, photo: photoObjectId}).exec(function (err) {
            if (err) reject(err);
            resolve(true);
        });
    });
};

const removeByPhoto = function (photosObjectIds) {
    return new Promise((resolve, reject)=>{
        Like.deleteMany({photo: {$in:photosObjectIds}}).exec(function (err) {
            if (err) reject(err);
            resolve(true);
        });
    });
};

const removeByUser = function (usersObjectIds) {
    return new Promise((resolve, reject)=>{
        Like.deleteMany({author: {$in:usersObjectIds}}).exec(function (err) {
            if (err) reject(err);
            resolve(true);
        });
    });
};

const removeByManyPhotos = function (photosObjectIds){
    return new Promise((resolve, reject)=>{
        Like.deleteMany({photo:{$in:photosObjectIds}}).exec(function (err) {
            if (err) reject(err);
            resolve(true);
        });
    });
};


module.exports = functionExporter(add, removeOne, removeByPhoto, removeByUser, removeByManyPhotos);