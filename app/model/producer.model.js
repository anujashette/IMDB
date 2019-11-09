/******************************************************************************
 *  Compilation:  nodemon server.js
 *  Execution:    nodemon server.js
 *  
 *  Purpose:  Producer model interact with database.
 *
 *  @author  Anuja Shette
 *  @version 1.0
 *  @since   08-10-2019
 *
 ******************************************************************************/

const mongoose = require('mongoose');
// const log = require('../../Logger/logger');

/****************************************************************************************************
 * @description Producer schema.
 ****************************************************************************************************
 */
const producer = new mongoose.Schema({
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
    timestamps: true
});

const Producer = new mongoose.model('producer', producer);

function ProducerModel() { }

/****************************************************************************************************
 * @param producerParam 
 * @description Add new producer in database.
 ****************************************************************************************************
 */
ProducerModel.prototype.create = async (producerParam) => {

    let savedProducer = await Producer.findOne({ 'name': producerParam.name });

    if (savedProducer !== null) {
        savedProducer = 'Producer already exist';
    }
    else {
        const newProducer = new Producer(producerParam);
        savedProducer = newProducer.save();
    }
    return savedProducer;
};
/****************************************************************************************************
 * @description Get all producer from database.
 ****************************************************************************************************
 */
ProducerModel.prototype.read = async () => {

    let getProducer = {};
    getProducer = await Producer.find({});
    return getProducer;
};

/****************************************************************************************************
 * @param producerParam 
 * @description Edit producer details and update in database.
 ****************************************************************************************************
 */
ProducerModel.prototype.update = async (id, producerParam) => {

    const updatedProducer = await Producer.findByIdAndUpdate(id, producerParam);
    if (updatedProducer === null) {
        return 'Producer not found to update';
    }
    else {
        return updatedProducer;
    }
};

/****************************************************************************************************
 * @param producerParam 
 * @description Delete producer from database.
 ****************************************************************************************************
 */
ProducerModel.prototype.delete = async (id) => {

    const deletedProducer = await Producer.findByIdAndRemove(id);
    if (deletedProducer === null) {
        return 'Producer not found to delete';
    }
    else {
        return deletedProducer;
    }
};

module.exports = new ProducerModel();