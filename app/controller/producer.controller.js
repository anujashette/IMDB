/******************************************************************************
 *  Compilation:  nodemon server.js
 *  Execution:    nodemon server.js
 *  
 *  Purpose:  Producer controller.
 *
 *  @author  Anuja Shette
 *  @version 1.0
 *  @since   08-10-2019
 *
 ******************************************************************************/

const producerService = require('../services/producer.services');
const log = require('../../Logger/logger');

function ProducerController() { }

/****************************************************************************************************
 * @param req 
 * @param res 
 * @description Add new producer.
 ****************************************************************************************************
 */
ProducerController.prototype.createProducer = (req, res) => {

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
            const producerParam = {
                name: req.body.name,
                gender: req.body.gender,
                DOB: req.body.DOB,
                bio: req.body.biomatric
            };

            producerService.createProducer(producerParam, (error, response) => {                
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
                        message: 'Producer created successfully',
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
 * @description Fetch all producer.
 ****************************************************************************************************
 */
ProducerController.prototype.readProducer = (req, res) => {
    try {
        producerService.readProducer((error, response) => {
            if (error) {
                // console.log(error);
            }
            else {
                return res.status(200).send({
                    status: '200',
                    message: 'Producers retrived successfully',
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
 * @description Edit producer details.
 ****************************************************************************************************
 */
ProducerController.prototype.updateProducer = (req, res) => {

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
            const producerParam = {
                id: req.body.id,
                name: req.body.name,
                gender: req.body.gender,
                DOB: req.body.DOB,
                bio: req.body.biomatric
            };

            producerService.updateProducer(producerParam, (error, response) => {
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
                        message: 'Producer updated successfully',
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
 * @description Delete producer.
 ****************************************************************************************************
 */
ProducerController.prototype.deleteProducer = (req, res) => {
    try {
        const producerParam = {
            id: req.body.id,
        };
        producerService.deleteProducer(producerParam,(error, response) => {
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
                    message: 'Producer deleted successfully',
                    data: response
                });
            }
        });
    } catch (error) {
        log.logger.error(error);
    }
};

module.exports = new ProducerController();