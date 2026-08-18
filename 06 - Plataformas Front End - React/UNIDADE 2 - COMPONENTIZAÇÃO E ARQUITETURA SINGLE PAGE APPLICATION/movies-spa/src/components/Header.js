import { Link } from "react-router-dom";

export function Header() {
    return (
        <>
            <h1>Aplicação de Filmes</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/favorites">Favorites</Link></li>
            </ul>
        </>
    )
}