import { moviesApi } from "../config/http";

export function getPopularMovies() {
    return moviesApi.get('/movie/popular')
}

export function getMovie(id) {
    return moviesApi.get(`/movie/${id}`)
}