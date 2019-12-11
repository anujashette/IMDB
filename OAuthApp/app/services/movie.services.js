/******************************************************************************
 *  Compilation:  nodemon server.js
 *  Execution:    nodemon server.js
 *  
 *  Purpose:  Movie services.
 *
 *  @author  Anuja Shette
 *  @version 1.0
 *  @since   08-10-2019
 *
 ******************************************************************************/
const movieModel = require('../model/movie.model');
const log = require('../../Logger/logger');

function MovieService() { }

/****************************************************************************************************
 * @param movieParam 
 * @param callback 
 * @description Add new movie.
 ****************************************************************************************************
 */
MovieService.prototype.createMovie = async (movieParam, callback) => {
    try {
        const createResponse = await movieModel.create(movieParam);
        if (createResponse === 'Movie already exist') {            
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
 * @description Fetch all movies.
 ****************************************************************************************************
 */
MovieService.prototype.readMovie = async ( callback) => {
    try {
        const readResponse = await movieModel.read();
        return callback(null, readResponse);
    } catch (error) {
        log.logger.error(error);
    }
};

/****************************************************************************************************
 * @param movieParam 
 * @param callback 
 * @description Update movie details.
 ****************************************************************************************************
 */
MovieService.prototype.updateMovie = async (id,movieParam, callback) => {
    try {

        const updateResponse = await movieModel.update(id,movieParam);

        if (updateResponse === 'Movie not found to update') {            
            return callback(updateResponse);
        }
        else {
            return callback(null, updateResponse);
        }
    } catch (error) {        
        log.logger.error(error);
        return callback('Movie already exist');
    }
};

/****************************************************************************************************
 * @param movieParam 
 * @param callback 
 * @description Delete movie.
 ****************************************************************************************************
 */
MovieService.prototype.deleteMovie = async (movieParam, callback) => {
    try {
        const id = {_id : movieParam.id};        
        const deleteResponse = await movieModel.delete(id);
        if(deleteResponse === 'Movie not found to delete'){
            return callback(deleteResponse);
        }
        else{
            return callback(null, deleteResponse);
        }
    } catch (error) {
        log.logger.error(error);
    }
};

module.exports = new MovieService();