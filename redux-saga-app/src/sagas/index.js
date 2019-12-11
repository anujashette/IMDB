import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { requestDog, requestDogSuccess, requestDogError, requestMovie, requestMovieSuccess, requestMovieError } from '../actions'
import { getMovies } from '../services/service';

export function* watchFetchDog() {
    yield takeLatest('FETCHED_MOVIE', fetchMovieAsync);
}

// export function* fetchDogAsync() {
//     try {
//         yield put(requestDog());
//         const data = yield call(() => {
//             return fetch('https://dog.ceo/api/breeds/image/random')
//                 .then(res => res.json())
//         }
//         );
//         yield put(requestDogSuccess(data));
//     } catch (error) {
//         yield put(requestDogError());
//     }
// }


export function* fetchMovieAsync() {
    try {
        const data = yield call(() => {
            return getMovies().then((res) => {
                return res;
            })
        }
        );
        yield put(requestMovieSuccess(data));
    } catch (error) {
        yield put(requestMovieError());
    }
}