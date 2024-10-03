import { useState } from "react";
import "./Comp1.css";

function Comp1({envepisodios}) {

    const [eepisodios, setEepisodios] = useState();
    const verEpisodios = () => {
        setEepisodios(envepisodios);
    }
    

    return(
        <div className="cardEpisodes">
            <strong>Lista de episodios</strong>
            <ul>
                {verEpisodios}
                {Object.entries(envepisodios.episode).map((character) => (
                    <li key={character.id}>{envepisodios.episode}</li>
                ))}
            </ul>
        </div>
    );
}

export default Comp1;