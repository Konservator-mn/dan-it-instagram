const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dtilof9bw',
    api_key: '219651427884488',
    api_secret: 'j06I0sR9hz1Bws4lj4Y_ES0OFmY'
});

const uploadPhoto = function (bufferData){
    return new Promise((resolve, reject)=>{
        cloudinary.uploader.upload_stream(function (err, result){
            if (err) reject(err);
            resolve(result.url);
        }).end(bufferData);
    });
};

const getPhotos = function (){
    let urlsList = [];
    Array.prototype.forEach.call(arguments, arg=>Array.isArray(arg)?urlsList.push(...arg):urlsList.push(arg));
    return Promise.all();
};

module.exports = cloudinary;