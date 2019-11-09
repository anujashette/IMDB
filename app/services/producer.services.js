/******************************************************************************
 *  Compilation:  nodemon server.js
 *  Execution:    nodemon server.js
 *  
 *  Purpose:  Producer services.
 *
 *  @author  Anuja Shette
 *  @version 1.0
 *  @since   08-10-2019
 *
 ******************************************************************************/

const producerModel = require('../model/producer.model');
const log = require('../../Logger/logger');

function ProducerService() { }

/****************************************************************************************************
 * @param movieParam 
 * @param callback 
 * @description Add new producer.
 ****************************************************************************************************
 */
ProducerService.prototype.createProducer = async (producerParam, callback) => {
    try {
        const createResponse = await producerModel.create(producerParam);
        if (createResponse === 'Producer already exist') {            
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
 * @description Fetch all producers.
 ****************************************************************************************************
 */
ProducerService.prototype.readProducer = async ( callback) => {
    try {
        const readResponse = await producerModel.read();
        return callback(null, readResponse);
    } catch (error) {
        log.logger.error(error);
    }
};

/****************************************************************************************************
 * @param movieParam 
 * @param callback 
 * @description Update producer details.
 ****************************************************************************************************
 */
ProducerService.prototype.updateProducer = async (producerParam, callback) => {
    try {
        const updateParam = {
            name:producerParam.name,
            gender:producerParam.gender,
            DOB:producerParam.DOB,
            bio:producerParam.bio
        };
        const id = {_id : producerParam.id};

        const updateResponse = await producerModel.update(id, updateParam);
        if(updateResponse === 'Producer not found to update'){
            return callback(updateResponse);
        }
        else{
            return callback(null, updateResponse);
        }
    } catch (error) {
        log.logger.error(error);
    }
};

/****************************************************************************************************
 * @param movieParam 
 * @param callback 
 * @description Delete producer.
 ****************************************************************************************************
 */
ProducerService.prototype.deleteProducer = async (producerParam, callback) => {
    try {
        const id = {_id : producerParam.id};        
        const deleteResponse = await producerModel.delete(id);
        if(deleteResponse === 'Producer not found to delete'){
            return callback(deleteResponse);
        }
        else{
            return callback(null, deleteResponse);
        }
    } catch (error) {
        log.logger.error(error);
    }
};

module.exports = new ProducerService();