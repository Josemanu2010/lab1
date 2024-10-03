import { useEffect, useState } from "react";
import axios from "axios";
import "./Components/App.css";
import Cards from "./Components/Cards/Cards";

function App() {

    const [data, setData] = useState([]);
    const [info, setInfo] = useState({});

    useEffect(() =>{
        const fetchData = async () => {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/character');
                setData(response.data.results);
                setInfo(response.data.info);
            } catch (error) {
                console.log('Error al cargar la API ', error);
            }
        }
        fetchData();
    }, [])
    


//   Nombre
//   Status
//   Especie
//   Link Comp2 - a otro componente en donde se muestre todos los episodios que ha participado ese personaje
//   link Comp3 - Origen, localización e Img



  return (
    <div className="container">
        <div className="header">
            <h1>Rick & Morty</h1>
        </div>

        
        <div className="order">
            {data.map((character) => (
                <Cards key={character.id} nombre={character.name} est={character.status} esp={character.species} obj={character}/>
            ))}
        </div>
         
    </div>
  );

}

export default App;
