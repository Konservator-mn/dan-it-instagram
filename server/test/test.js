const   User = require('../database')('User'),
        Subscribers = require('../database')('Subscribers'),
        Photo = require('../database')('Photo'),
        {readdir, readFile} = require('fs'),
        Comment = require('../database')('Comment');

//User.findById("5cfbd03f2ffaf144a13e84adf").then(console.log);
//User.findByName("iva_pet2").then(console.log);
//User.validPassword("5d0a5812d55df209cda952ad", "123456").then(console.log);
//User.create("ser_use_1", "0987654321").then(console.log);
//User.setPassword("5d0a5812d55df209cda952ad", "123456").then(console.log);
/*User.findManyByIds([
    "5cfe8ae4a72ac22e4f61a61",
    "5cfbd6449e982e4dfb26965",
    "5cfbd559a02e144d549062d6"
]).then(console.log);*/

//Subscribers.add("5d0a5812d55df209cda952ad", "5cfbd4faccbafb4d0b3edf8a").then(console.log);
//Subscribers.removeSubscribtion("5d0a5812d55df209cda952ad", "5cfbcfd707d24449d953c857").then(console.log);
//Subscribers.removeAllSubscribers("5cfbcdc51b5ca148cb9ca2d9").then(console.log);
//Subscribers.removeAllSubscriptions("5d0a5812d55df209cda952ad").then(console.log);
/*let path = './ser2';
readdir(path, function(err, files){
    if (err) console.error(err);
    files.forEach(fileName=>{
        let file = path+'/'+fileName;
        readFile(file, function(err, data){
            Photo.upload("5d0158c32d8e61d38018e57c", data).then(data=>console.log(file));
        });
    });
});*/

//Photo.removeOne("5d0a6b53b50e4114e94a1f15").then(console.log)
//Photo.removeUsersAll("5cfbcdc51b5ca148cb9ca2d9").then(console.log);


//Comment.add("5cfbd03f2faf144a13e84adf", "5d0a70764d537e18e2d70d09", "Это мой").then(console.log);
//Comment.add("5cfbd6449e982e4dfb269965", "5d0a70764d537e18e2d70d09", "Ща ...)))").then(console.log);
//Comment.add("5d0158c32d8e61d38018e57c", "5d0a70764d537e18e2d70d09", "Смешно").then(console.log);

Comment.edit("5d0a738c407ddb1b5d0c7633", "Теперь норм коммент").then(console.log);
