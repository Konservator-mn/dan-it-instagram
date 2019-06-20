const   mongoose = require('mongoose'),
        uri = "mongodb+srv://danitinstagram:danitinstagram@dan-it-instagram-qznrg.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true
});

const connection = mongoose.connection;

connection.on('error', console.error);

connection.once('open', function() {
    console.log('Connected to database');
});

module.exports = mongoose;

