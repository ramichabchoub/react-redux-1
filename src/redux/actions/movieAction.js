import axios from 'axios';
import { ALL_MOVIES, movieApi } from '../types/moviesType';

export const getAllMovies = () => {
    return async dispatch => {
        const res = await axios.get(movieApi);
        dispatch({
            type: ALL_MOVIES,
            data: res.data.results,
            pages: res.data.total_pages
        })
    }
}

export const getMovieSearch = (word) => {
    return async dispatch => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`);
        dispatch({
            type: ALL_MOVIES,
            data: res.data.results,
            pages: res.data.total_pages
        })
    }
}

export const getPage = (page) => {
    return async dispatch => {
        const res = await axios.get(`${movieApi}&page=${page}`);
        dispatch({
            type: ALL_MOVIES,
            data: res.data.results,
            pages: res.data.total_pages
        })
    }
}