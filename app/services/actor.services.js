/******************************************************************************
 *  Compilation:  nodemon server.js
 *  Execution:    nodemon server.js
 *  
 *  Purpose:  Actor services.
 *
 *  @author  Anuja Shette
 *  @version 1.0
 *  @since   08-10-2019
 *
 ******************************************************************************/

const actorModel = require('../model/actor.model');
function ActorService() { }
const log = require('../../Logger/logger');

/****************************************************************************************************
 * @param movieParam 
 * @param callback 
 * @description Add new actor.
 ****************************************************************************************************
 */
ActorService.prototype.createActor = async (actorParam, callback) => {
    try {
        const createResponse = await actorModel.create(actorParam);
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

/****************************************************************************************************
 * @param movieParam 
 * @param callback 
 * @description Fetch all actors.
 ****************************************************************************************************
 */
ActorService.prototype.readActor = async ( callback) => {
    try {
        const readResponse = await actorModel.read();
        return callback(null, readResponse);
    } catch (error) {
        log.logger.error(error);
    }
};

/****************************************************************************************************
 * @param movieParam 
 * @param callback 
 * @description Update actor details.
 ****************************************************************************************************
 */
ActorService.prototype.updateActor = async (actorParam, callback) => {
    try {
        const updateParam = {
            name:actorParam.name,
            gender:actorParam.gender,
            DOB:actorParam.DOB,
            bio:actorParam.bio
        };
        const id = {_id : actorParam.id};

        const updateResponse = await actorModel.update(id, updateParam);
        if(updateResponse === 'Actor not found to update'){
            return callback(updateResponse);
        }
        else{
            return callback(null, updateResponse);
        }
    } catch (error) {
        log.logger.error(error);
        return callback('Actor already exist');
    }
};

/****************************************************************************************************
 * @param movieParam 
 * @param callback 
 * @description Delete actor.
 ****************************************************************************************************
 */
ActorService.prototype.deleteActor = async (actorParam, callback) => {
    try {
        const id = {_id : actorParam.id};        
        const deleteResponse = await actorModel.delete(id);
        if(deleteResponse === 'Actor not found to delete'){
            return callback(deleteResponse);
        }
        else{
            return callback(null, deleteResponse);
        }
    } catch (error) {
        log.logger.error(error);
    }
};

module.exports = new ActorService();