const User = require("./../../database/Schemas/User")
const Photo = require("./../../database/Schemas/Photo")
const Subscribers = require("./../../database/Schemas/Subscribers")
const Post = require("./../../database/Schemas/Post")
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
ObserverSubscriberClass.prototype.Post = Post;
ObserverSubscriberClass.prototype.Comment = Comment;

module.exports = ObserverSubscriberClass;