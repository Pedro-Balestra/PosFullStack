import { useSelector } from "react-redux";
import { MovieItem } from "../../components/movieItem/MovieItem";
import styles from "./Favorites.module.css";

export function Favorites() {
  const movies = useSelector((state) => state.favorito.movies);
  console.log(movies);

  return (
    <>
      <h1>Filmes favoritos</h1>
      {movies.map((movie) => (
        <div className={styles.moviesList} key={movie.id}>
          <MovieItem movie={movie}></MovieItem>
        </div>
      ))}
    </>
  );
}
