/******************************************************************************
 *  Compilation:  nodemon server.js
 *  Execution:    nodemon server.js
 *  
 *  Purpose:  Upload images using multer.
 *
 *  @author  Anuja Shette
 *  @version 1.0
 *  @since   09-10-2019
 *
 ******************************************************************************/

const multer = require('multer');
const path = require('path');
/****************************************************************************************************
 * @description Multer used to store images locally i.e. disk storage.
 ****************************************************************************************************
 */
var storage = multer.diskStorage({
    destination: function (req, file, cb) {        
        cb(null, 'app/uploads');
    },
    filename: function (req, file, cb) {            
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname));
    }
});
var upload = multer({ storage: storage }).single('profile');

/****************************************************************************************************
 * @param req
 * @param res
 * @param next callback to movie controller
 * @description Add new movie in databse.
 ****************************************************************************************************
 */
function uploadProfile (req,res,next){    
    upload(req, res,(err)=>{
        if(err){
            console.log('error while uploading===>',err);
        }
        else{
            return next();
        }
    });
}

module.exports = uploadProfile;