const   mongoose = require('mongoose'),
        uri = "mongodb+srv://danitinstagram:danitinstagram@dan-it-instagram-qznrg.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error);

db.once('open', function() {
    console.log('Connected to database');
});