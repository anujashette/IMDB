// const initialState = {
//     url: 'https://images.dog.ceo/breeds/schnauzer-giant/n02097130_1159.jpg',
//     loading: false,
//     error: false,
//   };
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'REQUESTED_DOG':
//         return {
//           url: '',
//           loading: true,
//           error: false,
//         };
//       case 'REQUESTED_DOG_SUCCEEDED':
//         return {
//           url: action.url,
//           loading: false,
//           error: false,
//         };
//       case 'REQUESTED_DOG_FAILED':
//         return {
//           url: '',
//           loading: false,
//           error: true,
//         };
//       default:
//         return state;
//     }
//   };

const initialState = [{
    name: 'Home Alone',
    yearOfRelease: '2000',
    plot: 'Movie story',
}];

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

