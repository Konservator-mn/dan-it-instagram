const User = require("./../../database/Schemas/User")
const Photo = require("./../../database/Schemas/Photo")
const Subscribers = require("./../../database/Schemas/Subscribers")
const Like = require("./../../database/Schemas/Like")
const Comment = require("./../../database/Schemas/Comment")

class ObserverSubscriberClass{
    constructor(sessionId,activeListen){
        
        this.sessionId=sessionId;
        this.activeListen=activeListen;
        this.Observer.addSubscriber(this)
    
    }
    update(id,model){
     this.activeListen[model].forEach(function(element){
         if(element==id){
             this[model].findOne(id)
             .then(result=>{this.io.to(this.sessionId).emit('id updated',model,result);})}
     },this)
    }
    informObserver(id){
        this.Observer.informSubscribers(id)  
    }
    removeSubscribe(){
        this.Observer.removeSubscriber(this)
    }
   
}

ObserverSubscriberClass.prototype.User = User;
ObserverSubscriberClass.prototype.Photo = Photo;
ObserverSubscriberClass.prototype.Subscribers = Subscribers;
ObserverSubscriberClass.prototype.Like = Like;
ObserverSubscriberClass.prototype.Comment = Comment;

module.exports = ObserverSubscriberClass;