/******************************************************************************
 *  Compilation:  nodemon server.js
 *  Execution:    nodemon server.js
 *  
 *  Purpose:  Routing defined using methods of the Express app.
 *
 *  @author  Anuja Shette
 *  @version 1.0
 *  @since   08-10-2019
 *
 ******************************************************************************/

const express = require('express');
const app = express.Router();
const actorObj = require('../controller/actor.controller');
const producerObj = require('../controller/producer.controller');
const movieObj = require('../controller/movie.controller');
const upload = require('../middleware/multer');
const actorVersionObj = require('../controller/actor.version.controller');


// app.get('/',function(req,res){
//     res.send('IMDB API running...');
// });

/*****************************************************************************************************
 * @param /actor Route path.
 * @param actorObj Controller function object. 
 * @description CRUD router of actor.
 *****************************************************************************************************
 */
app.post('/actor',actorObj.createActor);
app.get('/actor',actorObj.readActor);
app.put('/actor',actorObj.updateActor);
app.patch('/actor',actorObj.deleteActor);

/*****************************************************************************************************
 * @param /producer Route path.
 * @param producerObj Controller function object.
 * @description CRUD router of producer.
 *****************************************************************************************************
 */
app.post('/producer',producerObj.createProducer);
app.get('/producer',producerObj.readProducer);
app.put('/producer',producerObj.updateProducer);
app.patch('/producer',producerObj.deleteProducer);

/*****************************************************************************************************
 * @param /movie Route path.
 * @param movieObj Controller function object.
 * @upload Calling to upload function.
 * @description CRUD router of movie.
 *****************************************************************************************************
 */
app.post('/movie',upload,movieObj.createMovie);
app.get('/movie',movieObj.readMovie);
app.put('/movie',upload,movieObj.updateMovie);
app.patch('/movie',movieObj.deleteMovie);

/*****************************************************************************************************
 * @param /actor versioning Route path.
 * @param movieObj Controller function object.
 * @upload Calling to upload function.
 * @description CRUD router of movie.
 *****************************************************************************************************
 */
app.post('/actor/older/versions',actorVersionObj.addActorsVersion);
app.post('/actor/approved',actorObj.actorVersioning);

module.exports = app;