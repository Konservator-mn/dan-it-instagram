const   User = require('../Schemas/User'),
        exportingObject = {};

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


const findByName = function (name) {
    return new Promise((resolve)=>{
        findOne ({name: name}).then(resolve);
    });
};
const validPassword = function (name, password){
    return new Promise((resolve)=>{
        findOne ({name: name}).then(user=>{
           resolve(user.validPassword(password));
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
Object.defineProperties(exportingObject, {
    findByName: {
        get: ()=>findByName,
        configurable: false,
        editable: false
    },
    validPassword: {
        get: ()=>validPassword,
        configurable: false,
        editable: false
    },
    create: {
        get: ()=>create,
        configurable: false,
        editable: false
    },
    setPassword: {
        get: ()=>setPassword,
        configurable: false,
        editable: false
    }
});

module.exports = exportingObject;