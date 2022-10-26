import axios from "axios";
import { useEffect, useState } from "react";

const PokemonCard = (props) => {
  const [image, setImage] = useState([]);
  const [specs, setSpecs] = useState([]);
  let pokemon = props.name;
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setSpecs(response.data);
      setImage(response.data.sprites.front_default);
    });
  }, [pokemon]);

  return (
    <div className="pokemon-card">
      <div className="pokemon-card-image">
        <img src={image} alt={props.name} />
      </div>
      <div className="pokemon-card-name">
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};

export default PokemonCard;
