import axios from 'axios';
import { useState } from "react";
import PokemonCard from './PokemonCard';

const UserDeck = () => {
    const [pokemons, setPokemons] = useState([]);
    const random = Math.floor(Math.random() * 100)

    function fetchPokemons(){
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${random}`).then((response) => {
            setPokemons(response.data.results);
        })
    }

    return ( <div className='deck-container'>
        <button onClick={fetchPokemons}>Random Deck</button>
        {pokemons.map((pokemon, index) =>
            <PokemonCard key={index} name={pokemon.name}/>
        )}
    </div> );
}

export default UserDeck;
