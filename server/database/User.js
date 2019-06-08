const {connection, mongoose} = require('./');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 6
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    salt: {
        type: String,
        required: true,
        minlength: 6
    }
});
userSchema.methods.speak = function () {
    console.log(`My name is ${this.name}`);
};
const User = mongoose.model('User', userSchema);


module.exports = User;