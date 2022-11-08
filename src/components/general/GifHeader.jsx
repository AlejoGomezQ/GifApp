import { Link } from "react-router-dom"

const GifHeader = () => {
    return (
        <header>
            <nav>
                <h1>Gif App</h1>
                <ul>
                <Link to="/" className="header-links"><li>Inicio</li></Link>
                <Link to="/favorites" className="header-links"><li>Favoritos</li></Link>
                </ul>
            </nav>
        </header>
    )
};

export { GifHeader };