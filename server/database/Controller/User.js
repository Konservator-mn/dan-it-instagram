const   User = require('../Schemas/User'),
        Subscribers = require('../Schemas/Subscribers'),
        Photo = require('../')('Photo'),
        Like = require('../')('Like'),
        Comment = require('../')('Comment'),
        Subscribe = require('../')('Subscribers'),
        functionExporter = require('../../libs/exporter');

/*  1. Существует ли пользователь с таким именем
**  2. Проверить пароль
**  3. Создать пользователя,
*   4.
 */
function findOne (params){
    return new Promise((resolve, reject)=>{
        try {
            User.findOne(params).exec(function(err, user){
                if (err) reject(err);
                resolve(user);
            });
        } catch(e) {
            reject(e);
        }
    });
}

const findById = function (ObjectId) {
    return new Promise((resolve, reject)=>{
        findOne({_id:ObjectId})
            .then(resolve, reject);
    });

};

const findByName = function (name) {
    return new Promise((resolve)=>{
        findOne ({name: name}).then(resolve);
    });
};
const validPassword = function (userObjectId, password){
    return new Promise((resolve)=>{
        findOne ({_id: userObjectId}).then(user=>{
            resolve((user && user.validPassword(password))?user:false);
        });
    });
};
const create = function (name, password){
    let newUser = new User({name: name});
    newUser.setPassword (password);
    return new Promise((resolve, reject)=>{
        newUser.save(function(err, user){
            if (err) reject(err);
            resolve(user);
        });
    });
};
const setPassword = function (userObjectId, password) {
    return new Promise((resolve, reject)=>{
        if (password.length<6) reject(new Error('Short password'));
        findOne ({_id: userObjectId}).then(user=>{
            user.setPassword(password);
            user.save(function (err, user) {
                if (err) reject(err);
                resolve(user);
            });
        });
    });
};
const findManyByIds = function (ids){
    return new Promise((resolve, reject)=>{
       User.find({'_id': { $in: ids }}, function (err, users) {
            if (err) reject(err);
            resolve(users);
        })
    });
};

const remove = function (userObjectID){
    return Promise.all([
        new Promise((resolve, reject)=>{
            User.deleteOne({_id: userObjectID}).exec(function(err){
                if (err) reject(err);
                resolve(true);
            });
        }),
        Photo.removeUsersAll(userObjectID),
        Comment.removeByUser(userObjectID),
        Like.removeByUser(userObjectID),
        Subscribe.removeAllSubscriptions(userObjectID),
        Subscribe.removeAllSubscribers(userObjectID)
    ]);
};

module.exports = functionExporter(findByName, validPassword, setPassword, create, findById, findManyByIds, remove);