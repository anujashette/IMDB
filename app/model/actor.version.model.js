const mongoose = require('mongoose');

const actor = new mongoose.Schema({
    actorID: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        // unique: true
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
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    },
    __v: {
        type: String,
        required: true
    }
},
{
    versionKey: false,
    timestamps: false
});

const ActorPrivous = new mongoose.model('actorPrevious', actor);

function ActorPrevModel() { }

/****************************************************************************************************
 * @param actorParam 
 * @description Add new actor in database.
 ****************************************************************************************************
 */
ActorPrevModel.prototype.add = async (actorParam) => {

    let savedActor = await ActorPrivous.findOne({
        $and: [
            { 'actorID': actorParam.actorID },
            { '__v': actorParam.__v }
        ]
    });
    console.log('actor and version=======>', savedActor);

    if (savedActor !== null) {
        savedActor = 'Actor already exist';
    }
    else {
        const newActor = new ActorPrivous(actorParam);
        savedActor = newActor.save();
    }
    return savedActor;
};
/****************************************************************************************************
 * @description Get all actors from database.
 ****************************************************************************************************
 */
ActorPrevModel.prototype.read = async () => {

    let getActor = await ActorPrivous.find({});
    return getActor;
};

/****************************************************************************************************
 * @param actorParam 
 * @description Edit actor details and update in database.
 ****************************************************************************************************
 */
ActorPrevModel.prototype.update = async (id, actorParam) => {

    const updatedActor = await ActorPrivous.findByIdAndUpdate(id, actorParam);
    if (updatedActor === null) {
        return 'Actor not found to update';
    }
    else {
        return updatedActor;
    }
};

/****************************************************************************************************
 * @param actorParam 
 * @description Delete actor from database.
 ****************************************************************************************************
 */
ActorPrevModel.prototype.delete = async (id) => {

    const deletedActor = await ActorPrivous.findByIdAndRemove(id);
    if (deletedActor === null) {
        return 'Actor not found to delete';
    }
    else {
        return deletedActor;
    }
};

module.exports = new ActorPrevModel();