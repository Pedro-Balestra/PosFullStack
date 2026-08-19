import { useQuery } from "@tanstack/react-query";
import { getMovie, getPopularMovies } from "../services/movies.service";

export function useMovies() {
  // const [movies, setMovies] = useState([])

  // useEffect(() => {
  //     getPopularMovies().then(({ data }) => {
  //         setMovies(data.results)
  //     })
  // }, [])

  // return movies

  return useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const { data } = await getPopularMovies();
      return data.results;
    },
  });
}

export function useMovie(id) {
  //   const [movie, setMovie] = useState([]);

  //   useEffect(() => {
  //     getMovie(id).then(({ data }) => {
  //       setMovie(data);
  //     });
  //   }, [id]);

  //   return movie;

  return useQuery({
    queryKey: ["movies", id],
    queryFn: async () => {
      const { data } = await getMovie(id);
      return data;
    },
  });
}
