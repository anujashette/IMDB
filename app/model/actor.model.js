/******************************************************************************
 *  Compilation:  nodemon server.js
 *  Execution:    nodemon server.js
 *  
 *  Purpose:  Actor model interact with database.
 *
 *  @author  Anuja Shette
 *  @version 1.0
 *  @since   08-10-2019
 *
 ******************************************************************************/

const mongoose = require('mongoose');

/****************************************************************************************************
 * @description Actor schema.
 ****************************************************************************************************
 */
const actor = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    bio: {
        type: String,
        required: true
    }
},
{
    timestamps:true
});

const Actor = new mongoose.model('actor', actor);

function ActorModel() { }

/****************************************************************************************************
 * @param actorParam 
 * @description Add new actor in database.
 ****************************************************************************************************
 */
ActorModel.prototype.create = async (actorParam) => {

    let savedActor = await Actor.findOne({ 'name': actorParam.name });

    if (savedActor !== null) {
        savedActor = 'Actor already exist';
    }
    else {
        const newActor = new Actor(actorParam);
        savedActor = newActor.save();
    }
    return savedActor;
};
/****************************************************************************************************
 * @description Get all actors from database.
 ****************************************************************************************************
 */
ActorModel.prototype.read = async () => {

    let getActor = await Actor.find({});
    return getActor;
};

/****************************************************************************************************
 * @param actorParam 
 * @description Edit actor details and update in database.
 ****************************************************************************************************
 */
ActorModel.prototype.update = async(id,actorParam) => {

    const updatedActor =await Actor.findByIdAndUpdate(id,actorParam);
    if(updatedActor === null){
        return 'Actor not found to update';
    }
    else{
        return updatedActor;
    }
};

/****************************************************************************************************
 * @param actorParam 
 * @description Delete actor from database.
 ****************************************************************************************************
 */
ActorModel.prototype.delete = async(id) => {
    
    const deletedActor =await Actor.findByIdAndRemove(id);
    if(deletedActor === null){
        return 'Actor not found to delete';
    }
    else{
        return deletedActor;
    }
};

module.exports = new ActorModel();