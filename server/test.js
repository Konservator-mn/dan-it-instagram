const  fs = require('fs'),
       https = require('https'),
        Stream = require('stream').Transform

let stream = new Stream();

let req = https.get('https://res.cloudinary.com/dtilof9bw/image/upload/v1560445589/yk1uutnokjirj5vzlsyu.jpg', (res)=>{

    res.on('data', (data)=>{
        stream.push(data);
    });

});
req.on('close', (data)=>{
   console.log(stream.buffer);
});

