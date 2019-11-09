/******************************************************************************
 *  Compilation:  nodemon server.js
 *  Execution:    nodemon server.js
 *  
 *  Purpose:  Movie controller.
 *
 *  @author  Anuja Shette
 *  @version 1.0
 *  @since   08-10-2019
 *
 ******************************************************************************/
const movieService = require('../services/movie.services');
const log = require('../../Logger/logger');

function MovieController() { }

/****************************************************************************************************
 * @param req 
 * @param res 
 * @description Add new movie.
 ****************************************************************************************************
 */
MovieController.prototype.createMovie = (req, res) => {

    try {
        console.log(req.body);

        req.check('name').not().isEmpty().withMessage('unique name required');
        req.check('yearOfRelease').not().isEmpty().withMessage('Year of release required');
        req.check('plot').not().isEmpty().withMessage('DOB is required');
        // req.check('file.path').not().isEmpty().withMessage('Poster is required');
        req.check('actor').not().isEmpty().withMessage('Actor id is required');
        req.check('producer').not().isEmpty().withMessage('Producer id is required');
        const error = req.validationErrors();

        if (error) {
            res.status(400).send({'Error: ': error});
        }
        else {
            console.log(req.file.path);

            const movieParam = {
                name: req.body.name,
                yearOfRelease: req.body.yearOfRelease,
                plot: req.body.plot,
                poster: req.file.path,
                actor:req.body.actor,
                producer:req.body.producer
            };
            movieService.createMovie(movieParam, (error, response) => {                
                if (error) {
                    return res.status(409).send({
                        status: '409',
                        message: error,
                        data: ''
                    });
                }
                else {
                    return res.status(200).send({
                        status: '200',
                        message: 'Movie created successfully',
                        data: response
                    });
                }
            });
        }
    } catch (error) {
        log.logger.error(error);
    }
};

/****************************************************************************************************
 * @param req 
 * @param res 
 * @description Fetch all movies.
 ****************************************************************************************************
 */
MovieController.prototype.readMovie = (req,res) =>{  
    try {
        movieService.readMovie((error,response)=>{
            if(response){
                return res.status(200).send({
                    status:'200',
                    message:'Movies retrived successfully',
                    data:response
                });
            }
        });
    } catch (error) {
        log.logger.error(error);
    }  
};

/****************************************************************************************************
 * @param req 
 * @param res 
 * @description Edit movie details.
 ****************************************************************************************************
 */
MovieController.prototype.updateMovie = (req, res) => {

    try {
        req.check('name').not().isEmpty().withMessage('unique name required');
        req.check('yearOfRelease').not().isEmpty().withMessage('Year of release required');
        req.check('plot').not().isEmpty().withMessage('DOB is required');
        // req.check('poster').not().isEmpty().withMessage('Poster is required');
        req.check('actor').not().isEmpty().withMessage('Actor id is required');
        req.check('producer').not().isEmpty().withMessage('Producer id is required');
        const error = req.validationErrors();

        if (error) {
            return res.status(400).send({'Error: ': error});
        }
        else {
            console.log(req.file.path);
            
            const movieParam = {
                name: req.body.name,
                yearOfRelease: req.body.yearOfRelease,
                plot: req.body.plot,
                poster: req.file.path,
                actor:req.body.actor,
                producer:req.body.producer
            };
            const id = { _id : req.body.id};
            
            movieService.updateMovie(id,movieParam, (error, response) => { 
               
                if (error) {
                    return res.status(409).send({
                        status: '409',
                        message: error,
                        data: ''
                    });
                }
                else {
                    return res.status(200).send({
                        status: '200',
                        message: 'Movie updated successfully',
                        data: response
                    });
                }
            });
        }
    } catch (error) {
        log.logger.error(error);
    }
};

/****************************************************************************************************
 * @param req 
 * @param res 
 * @description Delete movie.
 ****************************************************************************************************
 */
MovieController.prototype.deleteMovie = (req, res) => {
    try {
        const movieParam = {
            id: req.body.id,
        };
        movieService.deleteMovie(movieParam,(error, response) => {
            if (error) {
                return res.status(403).send({
                    status: '403',
                    message: error,
                    data: ''
                });
            }
            else {
                return res.status(200).send({
                    status: '200',
                    message: 'Movies deleted successfully',
                    data: response
                });
            }
        });
    } catch (error) {
        log.logger.error(error);
    }
};

module.exports = new MovieController();