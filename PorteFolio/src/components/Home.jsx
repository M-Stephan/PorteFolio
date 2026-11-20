
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    function InteractiveVisit() {
        if (confirm("Voulez vous continuer vers [ À propos ]")) {
            navigate('/about')
        }
    };

    return (
        <>
            <div id="home-page">
                <h1 id="home-title">Accueil</h1>
                <p>
                    Bonjour et bienvenue sur mon porte folio!
                    Je m'apelle Stéphan et je suis Fullstack Software Developpeur.
                    
                    Sur le site web vous allez pouvoir "apprendre à me connaitre" un peu plus,
                    Découvrir mes compétences, certains de mes projets accomplis, mon parcours actuel
                    et une petite zone de contact!

                    Pour une meilleure expérience je vous propose une <button onClick={InteractiveVisit}>visite guidée</button>
                </p>
            </div>   
        </>
    )
};
