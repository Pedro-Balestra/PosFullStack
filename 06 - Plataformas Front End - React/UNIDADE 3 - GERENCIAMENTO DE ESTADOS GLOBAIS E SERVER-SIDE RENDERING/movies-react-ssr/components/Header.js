import Link from "next/link";

export function Header() {
  return (
    <>
      <h1>Aplicação de Filmes</h1>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/movies"}>Movies</Link>
        </li>
      </ul>
    </>
  );
}
