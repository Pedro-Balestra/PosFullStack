import { useEffect, useState } from "react"
import { getMovie, getPopularMovies } from "../services/movies.service"

export function useMovies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getPopularMovies().then(({ data }) => {
            setMovies(data.results)
        })
    }, [])

    return movies
}

export function useMovie(id){
    const [movie, setMovie] = useState([])

    useEffect(() => {
        getMovie(id).then(({ data }) => {
            setMovie(data)
        })
    }, [id])

    return movie
}