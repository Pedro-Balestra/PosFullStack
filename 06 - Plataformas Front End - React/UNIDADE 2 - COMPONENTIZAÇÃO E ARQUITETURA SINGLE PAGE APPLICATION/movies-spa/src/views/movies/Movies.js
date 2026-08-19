import { queryClient } from "../../App";
import { MovieItem } from "../../components/movieItem/MovieItem";
import { useMovies } from "../../hooks/useMovies";
import { getMovie } from "../../services/movies.service";
import styles from "./Movies.module.css";

export function Movies() {
  const { data: movies, isLoading } = useMovies();

  async function prefetchMovie(id) {
    await queryClient.prefetchQuery({
      queryKey: ["movies", id],
      queryFn: async () => {
        const { data } = await getMovie(id);
        return data;
      },
    });
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className={styles.movie}>
      <h1>Filmes populares</h1>
      <div className={styles.moviesList}>
        {movies.map((movie) => (
          <div onMouseEnter={async () => await prefetchMovie(movie.id)}>
            <MovieItem key={movie.id} movie={movie}></MovieItem>
          </div>
        ))}
      </div>
    </section>
  );
}
