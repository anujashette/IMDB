/******************************************************************************
 *  Compilation:  nodemon server.js
 *  Execution:    nodemon server.js
 *  
 *  Purpose:  Movie model interact with database.
 *
 *  @author  Anuja Shette
 *  @version 1.0
 *  @since   08-10-2019
 *
 ******************************************************************************/

const mongoose = require('mongoose');

/****************************************************************************************************
 * @description Movie schema.
 ****************************************************************************************************
 */
const movie = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    yearOfRelease: {
        type: String,
        required: true
    },
    plot: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    actor: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'actor',
    }],
    producer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'producer',
    }
},
{
    timestamps: true
});

const Movie = new mongoose.model('movie', movie);

function MovieModel() { }

/****************************************************************************************************
 * @param movieParam 
 * @description Add new movie in database.
 ****************************************************************************************************
 */
MovieModel.prototype.create = async (movieParam) => {
    let savedMovie = await Movie.findOne({ 'name': movieParam.name });
    if (savedMovie !== null) {
        savedMovie = 'Movie already exist';
    }
    else {
        const newMovie = new Movie(movieParam);
        savedMovie = newMovie.save();
    }
    return savedMovie;
};

/****************************************************************************************************
 * @description Get all movies from database.
 ****************************************************************************************************
 */
MovieModel.prototype.read = async () =>{
    let getMovies = await Movie.find({}).populate('actor producer');
    return getMovies;
};

/****************************************************************************************************
 * @param movieParam 
 * @description Edit movie details and update in database.
 ****************************************************************************************************
 */
MovieModel.prototype.update = async (id,movieParam) => {
    console.log('before in model',id,movieParam);

    let updatedMovie = await Movie.findByIdAndUpdate(id,movieParam);
    console.log('after in model',updatedMovie);

    if (updatedMovie === null) {
        updatedMovie = 'Movie not found to update';
        return updatedMovie;
    }
    else {
        return updatedMovie;
    }
};

/****************************************************************************************************
 * @param movieParam 
 * @description Delete movie from database.
 ****************************************************************************************************
 */
MovieModel.prototype.delete = async(id) => {
    
    const deletedMovie =await Movie.findByIdAndRemove(id);
    if(deletedMovie === null){
        return 'Actor not found to delete';
    }
    else{
        return deletedMovie;
    }
};

module.exports = new MovieModel();