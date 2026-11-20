import { Link } from 'react-router-dom';

export default function Navbar(){
    return (
        <nav>
            <Link to="/">ACCEUIL</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/gallery">GALERIE</Link>
        </nav>
    )
};