// src/api.js
import axios from 'axios';

const getListPokemon = async () => {
    const listPokemons = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';

    try {
        const response = await axios.get(listPokemons);
        return response.data.results; // Devuelve los datos de la respuesta
    } catch (error) {
        console.error('Error fetching Pokémon list:', error);
        throw error;
    }
};

const getPokemon = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        // window.location.reload();
        localStorage.removeItem("ListPokemons");
        console.error('Error fetching Get Pokémon:', error);
    }
};
const getPokemonSearch = async (text) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`);
        return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
        console.error('Error fetching Pokémon list:', error);
        throw error; // Lanza el error para manejarlo en el componente
    }
};

export { getListPokemon,getPokemon ,getPokemonSearch};
