const server =require("./../bin/www").server
const io = require("socket.io")(server);
const ObserverClass =require("./SocketClasses/Observer")
const ObserverSubscriberClass =require("./SocketClasses/Subscriber")
const Observer = new ObserverClass();
ObserverSubscriberClass.prototype.io=io;
ObserverSubscriberClass.prototype.Observer=Observer;


io.on('connection', function(socket){

    socket.on('SubscribeToUpdates', function(session){
      console.log(session)
      
       new ObserverSubscriberClass(session.id,session.ListenTo)
       })
   
    socket.on('UpdateSubscribes', function(session){
      Observer.updateSubscriber(session.id,session.ListenTo)
    })
  
    socket.on('emitUpdate', function(id,model){
     Observer.informSubscribers(id,model);
    })

});

