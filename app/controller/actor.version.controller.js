const actorService = require('../services/actor.version.service');
const log = require('../../Logger/logger');

function ActorController() { }

ActorController.prototype.addActorsVersion = (req, res) => {
    try {
        req.check('_id').not().isEmpty().withMessage('actor ID is required');
        req.check('name').not().isEmpty().withMessage('unique name is required');
        req.check('gender').not().isEmpty().withMessage('Gender is required');
        req.check('DOB').not().isEmpty().withMessage('DOB is required');
        req.check('bio').not().isEmpty().withMessage('Biomatric details is required');
        const error = req.validationErrors();

        if (error) {
            return res.status(400).send('Error: ', error);
        }
        else {
            const actorParam = {
                _id: req.body._id,
                name: req.body.name,
                gender: req.body.gender,
                DOB: req.body.DOB,
                bio: req.body.bio,
                createdAt: req.body.createdAt,
                updatedAt: req.body.updatedAt,
                __v: req.body.__v
            };

            actorService.addActor(actorParam, (error, response) => {
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

module.exports = new ActorController;