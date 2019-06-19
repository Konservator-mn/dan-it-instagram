module.exports=class Observer{
    constructor(){
        this.subscribers={}
    }
    addSubscriber(subscriber){
        this.subscribers[subscriber.sessionId]=subscriber;
    }
    removeSubscriber(subscriber){
        this.subscribers.del(subscriber)
    }
    updateSubscriber(sessionId,activeListen){
    this.subscribers[sessionId]["activeListen"] = activeListen;
   }
    informSubscribers(id,model){
        for (let key in this.subscribers){
            this.subscribers[key]["update"](id,model)
        }
    }
}
