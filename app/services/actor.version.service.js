const actorModel = require('../model/actor.version.model');
function ActorService() { }
const log = require('../../Logger/logger');

/****************************************************************************************************
 * @param movieParam 
 * @param callback 
 * @description Add new actor.
 ****************************************************************************************************
 */
ActorService.prototype.addActor = async (actorParam, callback) => {
    try {
        console.log('in add actor',actorParam[0]);
        
        let version = actorParam[0].__v.toString();
        console.log('int id',version);
        
        const actorVersionParam = {
            actorID: actorParam[0]._id,
            name: actorParam[0].name,
            gender: actorParam[0].gender,
            DOB: actorParam[0].DOB,
            bio: actorParam[0].bio,
            createdAt: actorParam[0].createdAt,
            updatedAt: actorParam[0].updatedAt,
            __v: version
        };
        const createResponse = await actorModel.add(actorVersionParam);
        console.log('after add actor version====>',createResponse);
        
        if (createResponse === 'Actor already exist') {            
            return callback(createResponse);
        }
        else {
            return callback(null, createResponse);
        }
    } catch (error) {
        log.logger.error(error);
    }
};

module.exports = new ActorService();