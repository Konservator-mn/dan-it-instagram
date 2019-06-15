//"ivan_pet"

const   User = require('../database')('User'),
        Photo = require('../database')('Photo'),
        http = require('http');
const server = http.createServer((req, res)=>{
    new Promise((resolve)=>{
        User.findByName('ivan_pet').then(user=>{
            Photo.get(user._id, 3, 6).then(photosInBase64=>{
                resolve(photosInBase64.map(photo=>`<img src="${photo}">`)
                    .join(''));
            });
        });
    }).then(images=>{
        res.end(htmlWrap(images));
    });
});

server.listen(3000);

function htmlWrap(constent) {
    return `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    ${constent}
</body>
</html>`
}


