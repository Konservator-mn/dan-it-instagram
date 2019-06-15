const   Subscribers = require('../Schemas/Subscribers'),
        User = require('../Schemas/User'),
        userController = require('../')('User'),
        functionExporter = require('../../libs/exporter');

const findOneSubscribtion = function (subscriberObjectId, subscribeOnObjectId) {
    return new Promise((resolve, reject)=>{
        Subscribers.findOne({subscriber: subscriberObjectId, subscribeTo: subscribeOnObjectId}).exec(function (err, subscription){
            if (err) reject(err);
            resolve(subscription || false);
        });
    });
};

const addSubscribtion = function (subscriberObjectId, subscribeOnObjectId){
    return new Promise((resolve, reject)=>{
        findOneSubscribtion(subscriberObjectId, subscribeOnObjectId)
            .then(subscription=>{
                if (subscription) {
                    User.findById(subscribeOnObjectId).then(resolve, reject);
                } else {
                    let subscription = new Subscribers({subscriber: subscriberObjectId, subscribeTo: subscribeOnObjectId});
                    subscription.save(function (err, subscription){
                        if (err) reject(err);
                        User.findById(subscription.subscribeTo).then(resolve, reject);
                    })
                }
            }, reject);
    });
};

const removeSubscribtion = function (subscriberObjectId, subscribeOnObjectId){
    return new Promise((resolve, reject)=>{
        Subscribers.deleteOne({subscriber: subscriberObjectId, subscribeTo: subscribeOnObjectId}, function (err){
            if (err) reject(err);
            resolve(true);
        });
    });
};
const getAllSubscribtions = function (userObjectId) {
    return new Promise((resolve, reject)=>{
        Subscribers.find({ subscriber: userObjectId}, function (err, subscribeList) {
           if (err) reject(err);
            userController.findManyByIds(subscribeList.map(subscribeObj=>subscribeObj.subscribeTo)).then(users=>{
                resolve(users);
           }, reject);
        });
    });
};
const removeAllSubscribers = function (userObjectId) {
    return new Promise((resolve, reject)=>{
        Subscribers.deleteMany({ subscribeTo: userObjectId }, function (err) {
            if (err) reject(err);
            resolve(true);
        });
    });
};

const removeAllSubscriptions = function (userObjectId) {
    return new Promise((resolve, reject)=>{
        Subscribers.deleteMany({ subscriber: userObjectId }, function (err) {
            if (err) reject(err);
            resolve(true);
        });
    });
};

module.exports = functionExporter(addSubscribtion, getAllSubscribtions, removeAllSubscribers, findOneSubscribtion, removeAllSubscriptions);


