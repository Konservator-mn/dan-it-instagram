const   cloudinary = require('cloudinary').v2,
        request = require('request').defaults({ encoding: null }),
        functionExporter = require('../libs/exporter');
/*
Для аватарки надо менять разрешение изображения
https://cloudinary.com/documentation/node_image_manipulation#resizing_and_cropping
 */

cloudinary.config({
    cloud_name: 'dtilof9bw',
    api_key: '219651427884488',
    api_secret: 'j06I0sR9hz1Bws4lj4Y_ES0OFmY'
});

const upload = function (bufferData){
    return new Promise((resolve, reject)=>{
        cloudinary.uploader.upload_stream(function (err, result){
            if (err) reject(err);
            resolve(result);
        }).end(bufferData);
    });
};

const getOne = function (photoInfo) {
    return new Promise((resolve, reject)=>{
        request.get(photoInfo.url, function(err, response, content){
            if (err) reject(err);
            else if (response.statusCode !== 200) reject(new Error(`Response status code ${response.statusCode}`));
            let prefix = `data:${photoInfo.format};base64, `;
            let data = prefix + Buffer.from(content).toString('base64');
            resolve(data);
        });
    });
};

const getMany = function (photoInfoList){
    return Promise.all(
        photoInfoList.map(getOne)
    );
};

const removeOne = function (photoInfo) {
    return new Promise((resolve, reject)=>{
        cloudinary.uploader.destroy(photoInfo.public_id, function (err, result) {
            if (err) reject(err);
            resolve(result.result==='ok');
        })
    });
};

const removeMany = function (photoInfoList) {
    return Promise.all(
        photoInfoList.map(removeOne)
    );
};

module.exports = functionExporter(upload, getOne, getMany, removeOne, removeMany);