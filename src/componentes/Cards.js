import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cardMusic = [
    {
        titleMusic: "Ah Teu",
        name: "Nesk Only & Victin",
        linkPhoto: "https://e-cdn-images.dzcdn.net/images/cover/419533172c192cc019649698d3f1764d/264x264-000000-80-0-0.jpg"
    },
    {
        titleMusic: "Ainda que a Figueira",
        name: "Fernandinho",
        linkPhoto: "https://e-cdn-images.dzcdn.net/images/artist/175d80de4c01ad0946b74e6577db1f24/264x264-000000-80-0-0.jpg"
    },
    {
        titleMusic: "Crawling",
        name: "Linkin Park",
        linkPhoto: "https://e-cdn-images.dzcdn.net/images/artist/00d5523a2272b57710427dafc6f25ea6/264x264-000000-80-0-0.jpg"
    },
    {
        titleMusic: "Segunda-Feira",
        name: "Esteban Tavares",
        linkPhoto: "https://e-cdn-images.dzcdn.net/images/artist/b2d2ac25dc1fceb4a54049ef52b8abbc/264x264-000000-80-0-0.jpg"
    },
];


export default function Cards() {
    return (
        <div className="music-right">
            {cardMusic.map((card, index) => (
                <a className="music-card" href="musica.html" key={index}>
                    <img src={card.linkPhoto} alt="Capa da Música" />
                    <h3>{card.titleMusic}</h3>
                    <p>{card.name}</p>
                    <div className="play-button">
                        <FontAwesomeIcon icon={faPlay} />
                    </div>
                </a>
            ))}
        </div>
    );
}