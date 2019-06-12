const   User = require('../Schemas/User'),
        Subscribers = require('../Schemas/Subscribers'),
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
const validPassword = function (name, password){
    return new Promise((resolve)=>{
        findOne ({name: name}).then(user=>{
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
const setPassword = function (name, password) {
    return new Promise((resolve, reject)=>{
        findOne ({name: name}).then(user=>{
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

module.exports = functionExporter(findByName, validPassword, setPassword, create, findById, findManyByIds);