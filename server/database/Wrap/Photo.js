const   photoCloud = require('../photoCloud'),
        Photo = require('../Schemas/Photo'),
        functionExporter = require('../../libs/exporter');

const uploadPhoto = function (ownerObjectId, bufferData){
    return new Promise((resolve, reject)=>{
        cloudinary.uploader.upload_stream(function (err, result){
            if (err) reject(err);
            let photo = new Photo({owner: ownerObjectId, photoUrl: result.url});
            photo.save(function (err) {
                if (err) reject(err);
                resolve(bufferData);
            });
        }).end(bufferData);
    });
};

const getUserPhoto = function (userObjectId, limit) {
    return new Promise((resolve, reject)=>{
        Photo.fin
    });
};


Object.defineProperties(exportingObject, {
    uploadPhoto: {
        get: ()=>uploadPhoto,
        configurable: false,
        editable: false
    },

});

module.exports = functionExporter(uploadPhoto, getUsersPhoto);