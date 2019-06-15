const   photoCloud = require('../photoCloud'),
        Photo = require('../Schemas/Photo'),
        functionExporter = require('../../libs/exporter');

const get = function (userObjectId, limit1, limit2) {
    let query = Photo.find({owner: userObjectId});
    if (limit2 && limit1 && limit1>0 && limit2>limit1) {
        let totalAmount = Photo.count({owner: userObjectId});
        if (limit2>=totalAmount){
            query = query.sort({$natural: -1}).limit(limit1);
        } else {
            return getFromTo(query, limit1, limit2);
        }

    } else if (limit1 && limit1>0){
        query = query.sort({$natural: 1}).limit(limit1);
    }
    return new Promise((resolve, reject)=>{
        query.exec(function (err, photosList){
            if (err) reject(err);
            photoCloud.getMany(photosList).then(resolve, reject);
        });
    });
};

const upload = function (ownerObjectId, photoData){
    return new Promise((resolve, reject)=>{
        photoCloud.upload(photoData).then(cloudResponse=>{
            let photo = new Photo({
                owner: ownerObjectId,
                url: cloudResponse.url,
                format: cloudResponse.format,
                public_id: cloudResponse.public_id
            });
            photo.save(function (err) {
                if (err) reject(err);
                photoCloud.getOne(photo).then(resolve, reject);
            });
        }, reject);
    });
};



module.exports = functionExporter(upload, get);


function getFromTo (query, from, to) {
    return new Promise((resolve, reject)=>{
        query.exec(function (err, photosList){
            if (err) reject(err);
            photosList = photosList.slice(from-1, to-1);
            photoCloud.getMany(photosList).then(resolve, reject);
        });
    });
}