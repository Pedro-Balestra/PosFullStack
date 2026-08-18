import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addMovie } from '../../store/reducers/favorito';
import styles from './MovieItem.module.css';

export function MovieItem({ movie }) {
    const dispatch = useDispatch();

    return (
        <div className={styles.movie}>
            {movie.poster_path && (
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="" />
            )}

            <h3>{movie.title}</h3>
            <p>
                <Link className={styles.detailsBtn} to={`/movies/${movie.id}`}>Ver detalhes</Link>
                <button onClick={() => dispatch(addMovie(movie))}>Adcionar aos favoritos</button>
            </p>
        </div>
    )
}