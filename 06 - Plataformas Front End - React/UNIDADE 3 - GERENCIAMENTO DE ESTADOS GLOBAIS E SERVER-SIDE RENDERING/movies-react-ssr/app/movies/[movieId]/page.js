import { getMovie } from "@/services/movies.service";
import style from "./MovieDetail.module.css";

export default async function MovieDetail({ params }) {
  const { movieId } = await params;
  const { data: movie } = await getMovie(movieId);
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
