import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMovie, removeMovie } from "../../store/reducers/favorito";
import styles from "./MovieItem.module.css";

export function MovieItem({ movie }) {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.favorito.movies);

  function renderButton() {
    if (movies.find((m) => m.id === movie.id)) {
      return (
        <button onClick={() => dispatch(removeMovie(movie))}>
          Remover dos favoritos
        </button>
      );
    }
    return (
      <button onClick={() => dispatch(addMovie(movie))}>
        Adcionar aos favoritos
      </button>
    );
  }

  return (
    <div className={styles.movie}>
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt=""
        />
      )}

      <h3>{movie.title}</h3>
      <p>
        <Link className={styles.detailsBtn} to={`/movies/${movie.id}`}>
          Ver detalhes
        </Link>
        {renderButton()}
      </p>
    </div>
  );
}
