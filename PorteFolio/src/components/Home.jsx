
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    function GalleryRedirect() {
        if (confirm("Voulez vous continuer vers la page 'Gallerie' ")) {
            navigate('/gallery');
        };
    };
    

    function AboutRedirect() {
        if (confirm("Voulez vous continuer vers la page 'À propos' ?")) {
            navigate('/about');
        };
    };

    return (
        <>
            <div id="home-page">
                <div id="home-block-1">
                    <div class="home-block-content">
                        <h1 id="home-title">Bonjour</h1>
                        <p>
                            Bienvenue sur mon porte folio!
                            Je m'apelle <strong>Stéphan</strong> et je suis <strong>Fullstack Software Developpeur</strong>.
                            <br /><br />
                            Sur ce site web vous allez pouvoir "apprendre à me connaitre" un peu plus!
                            <br /><br />
                            Découvrir mes compétences, certains projets que j'ai créé, mon parcours actuel
                            ainsi qu'une zone de contact!
                            <br /><br />
                            
                            <br /><br />
                            <button id="home-gallery-btn" onClick={AboutRedirect}>En savoir plus...</button>
                        </p>
                    </div>
                </div>
                <div id="home-block-2">
                    <div class="home-block-content">
                        <h1 id="home-title">Important</h1>
                        <p>
                            Certains projets sont réels, on été créés pour des personnes dans le domaine privé.
                            Les web-site, serveurs de jeux video, bots discord, applications ont été ou sont déployés officiellement.
                            <br /><br />
                            Vous comprendrez donc je je ne peux me permettre de donner le code complet de ces dits projets.
                            <br /><br />
                            Cependant il sera tout de même possible d'en voir quelques extraits visuels dans la Galerie.
                            <br /><br />
                            <button id="home-gallery-btn" onClick={GalleryRedirect}>Voir la galerie</button>
                        </p>
                    </div>
                </div>
            </div>   
        </>
    )
};
