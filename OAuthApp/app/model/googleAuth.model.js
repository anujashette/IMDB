const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isEmailVerified: {
        type: Boolean,
        defaultValue: false
    },
    imageurl: {
        type: String,
    },
    notificationlink: {
        type: String
    }
}, {
    timestamps: true
});

const user = mongoose.model('user', userSchema);

function UserModel() { }

UserModel.prototype.create = () => {
 
};

UserModel.prototype.read  =async (findUser) =>{
    let userData = await user.find(findUser);
    console.log(userData);
    return userData;
};

module.exports = new UserModel();