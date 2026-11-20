import { Link } from 'react-router-dom';

export default function Navbar(){
    return (
        <nav>
            <Link to="/">ACCEUIL</Link>
            <Link to="/about">À PROPOS</Link>
            <Link to="/techno">TECHNOS</Link>
            <h1>Porte Folio Stephan M.</h1>
            <Link to="/gallery">GALERIE</Link>
            <Link to="/cv">CV</Link>
            <Link to="/contact">CONTACT</Link>
        </nav>
    )
};