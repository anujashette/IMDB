const userModel = require('../model/googleAuth.model');
function UserSerivce() { }

UserSerivce.prototype.loginWithGoogle = async (userDetails, callback) => {
    try {
        let findUser = { email: userDetails.email };
        let findUserResponse = userModel.read(findUser);
        if (findUserResponse) {
            return callback(null, findUserResponse);
        }
        else {
            let createUserResponse = await userModel.create(userDetails);
            return callback(null, createUserResponse);
        }
    }
    catch(error){
        return callback(error);
    }
};

module.exports = new UserSerivce();