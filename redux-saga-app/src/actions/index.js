 
export  const requestMovieSuccess = (data) => {
    console.log('actions',data.data.data);
    
    return { type: 'REQUESTED_MOVIE_SUCCEEDED', movies: data.data.data }
  };
  
export const requestMovieError = () => {
    return { type: 'REQUESTED_MOVIE_FAILED' }
  };
  
export const fetchMovie = () => {
    return { type: 'FETCHED_MOVIE' }
  };