/******************************************************************************
 *  Compilation:  nodemon server.js
 *  Execution:    nodemon server.js
 *  
 *  Purpose:  Acotr controller.
 *
 *  @author  Anuja Shette
 *  @version 1.0
 *  @since   08-10-2019
 *
 ******************************************************************************/
const actorService = require('../services/actor.services');
const log = require('../../Logger/logger');

function ActorController() { }

/****************************************************************************************************
 * @param req 
 * @param res 
 * @description Add new actor.
 ****************************************************************************************************
 */
ActorController.prototype.createActor = (req, res) => {
    try {        
        req.check('name').not().isEmpty().withMessage('unique name is required');
        req.check('gender').not().isEmpty().withMessage('Gender is required');
        req.check('DOB').not().isEmpty().withMessage('DOB is required');
        req.check('biomatric').not().isEmpty().withMessage('Biomatric details is required');
        const error = req.validationErrors();

        if (error) {
            res.status(400).send('Error: ', error);
        }
        else {
            const actorParam = {
                name: req.body.name,
                gender: req.body.gender,
                DOB: req.body.DOB,
                bio: req.body.biomatric
            };

            actorService.createActor(actorParam, (error, response) => {                
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
                        message: 'Actor created successfully',
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
 * @description Fetch all actors.
 ****************************************************************************************************
 */
ActorController.prototype.readActor = (req, res) => {
    try {
        actorService.readActor((error, response) => {
            if (error) {
                // console.log(error);
            }
            else {
                return res.status(200).send({
                    status: '200',
                    message: 'Actors retrived successfully',
                    data: response
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
 * @description Edit actor details.
 ****************************************************************************************************
 */
ActorController.prototype.updateActor = (req, res) => {

    try {
        req.check('name').not().isEmpty().withMessage('unique name is required');
        req.check('gender').not().isEmpty().withMessage('Gender is required');
        req.check('DOB').not().isEmpty().withMessage('DOB is required');
        req.check('biomatric').not().isEmpty().withMessage('Biomatric details is required');
        const error = req.validationErrors();

        if (error) {
            res.status(400).send({'Error: ':error});
        }
        else {
            const actorParam = {
                id: req.body.id,
                name: req.body.name,
                gender: req.body.gender,
                DOB: req.body.DOB,
                bio: req.body.biomatric
            };

            actorService.updateActor(actorParam, (error, response) => {
                if (error) {
                    return res.status(403).send({
                        status: '403',
                        message: error,
                        data: ''
                    });                }
                else {
                    return res.status(200).send({
                        status: '200',
                        message: 'Actor updated successfully',
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
 * @description Delete actor.
 ****************************************************************************************************
 */
ActorController.prototype.deleteActor = (req, res) => {
    try {
        const actorParam = {
            id: req.body.id,
        };
        actorService.deleteActor(actorParam,(error, response) => {
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
                    message: 'Actor deleted successfully',
                    data: response
                });
            }
        });
    } catch (error) {
        log.logger.error(error);
    }
};

module.exports = new ActorController();