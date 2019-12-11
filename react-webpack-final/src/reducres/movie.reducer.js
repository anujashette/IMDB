const initialState = {
    name: 'Home Alone',
    yearOfRelease: '2000',
    plot: 'Movie story',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUESTED_MOVIE':
            return {
                ...state,
            };

        case 'REQUESTED_MOVIE_SUCCEEDED':
            return state.concat(action.movies)

        case 'REQUESTED_MOVIE_FAILED':
            return {
                ...state,
                loading: false,
                error: true,
            };

        default:
            return state;
    }
};

export default reducer;

