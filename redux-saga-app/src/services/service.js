import axios from 'axios';

const url = 'http://localhost:4000';

export function getMovies () {
    console.log('services');
    return axios.get(url+`/movie`)
}