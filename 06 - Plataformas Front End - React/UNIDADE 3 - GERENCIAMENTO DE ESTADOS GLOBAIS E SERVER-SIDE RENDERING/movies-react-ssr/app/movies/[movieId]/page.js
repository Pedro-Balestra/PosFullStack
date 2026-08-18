import { getMovie, getPopularMovies } from "@/services/movies.service";
import style from "./MovieDetail.module.css";

// No App Router (pasta `app/`), o equivalente ao `getStaticPaths` do Pages
// Router é o `generateStaticParams`. Ambos servem para o mesmo: informar ao
// Next, em tempo de build, quais valores de `[movieId]` existem, para que essas
// páginas sejam geradas estaticamente (SSG) em vez de a cada requisição.
//
// Duas diferenças na forma de escrever:
//
// 1. Retorna o array direto, sem o embrulho `{ paths, fallback }`.
// 2. Cada item é `{ movieId: '123' }`, sem o aninhamento `params`.
//    No Pages Router seria `{ params: { movieId: '123' } }`.
//
// O `fallback` virou um export separado, o `dynamicParams` logo abaixo.
export async function generateStaticParams() {
  const { data } = await getPopularMovies();

  // O template literal é necessário: `movie.id` vem como número do TMDB,
  // e params de rota precisam ser string.
  return data.results.map((movie) => ({
    movieId: `${movie.id}`,
  }));
}

// Equivale ao antigo `fallback: true`. Define o que fazer com um id que não
// está na lista acima: `true` gera a página sob demanda e guarda em cache,
// `false` devolve 404. Como `true` já é o padrão, esta linha é opcional —
// está aqui só para deixar o comportamento explícito.
export const dynamicParams = true;

// export async function getStaticPaths() {
//   const { data } = await getPopularMovies();
//   const paths = data.results.map((movie) => ({
//     params: {
//       movieId: `${movie.id}`,
//     },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// }

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
