const userService = require('../services/googleAuth.service');
function UserController() { }

UserController.prototype.loginWithGoogle = (req, res) => {

    console.log('token in routes', req.user.profile._json);
    try {
        if (req.user.token) {
            const userDetials = {
                email: req.user.profile._json.email,
                password: req.user.profile._json.sub,
                firstname: req.user.profile._json.given_name,
                lastname: req.user.profile._json.family_name,
                isGoogleVerified: req.user.profile._json.email_verified,
                imageurl: req.user.profile._json.picture
            };
            userService.loginWithGoogle(userDetials, (error, createResponse) => {
                if (error) {
                    console.log('In controller=====>', error);
                }
                else {
                    console.log('In controller=====>', createResponse);
                    return res.json({
                        status: 'Google authorized user'
                    });
                }
            });
        } else {
            return res.json({
                status: 'Unauthorized user access'
            });
        }
    }
    catch (error) {
        console.log(error);
    }
};

module.exports = new UserController();