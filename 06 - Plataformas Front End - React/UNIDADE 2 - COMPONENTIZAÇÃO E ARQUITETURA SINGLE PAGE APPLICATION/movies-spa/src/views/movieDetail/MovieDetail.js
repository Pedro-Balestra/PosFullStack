import { useParams } from "react-router-dom";
import { useMovie } from "../../hooks/useMovies";
import style from "./MovieDetail.module.css";

export function MovieDetail() {
  const { id } = useParams();
  const { data: movie, isLoading } = useMovie(id);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className={style.movie}>
      <figure className={style.imageContainer}>
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt=""
          />
        )}
      </figure>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </section>
  );
}