import { React, useEffect, useState } from 'react';
import { getPokemon } from '../services/api';
import { useNavigate } from "react-router-dom";

import '../assets/css/cards.css'

const Cards = (params) => {

    const navigate = useNavigate();

    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const viewDetail = (id) => {
        navigate(`/Detail/${id}`)
    }

    useEffect(() => {
        const loadPokemon = async () => {
            try {
                let resp = await getPokemon(params.poke.url);

                let info = {
                    id: resp.id,
                    name: resp.name,
                    image: resp.sprites.other['official-artwork'].front_default,
                    weight: resp.weight / 10 % 1 == 0 ? (resp.weight / 10).toFixed(1) : resp.weight / 10,
                    height: resp.height / 10,
                    abilities: resp.abilities,
                    types: resp.types,
                    stats: resp.stats,
                }

                setPokemon(info);
                localStorage.setItem(info.id, JSON.stringify(info))

            } catch (e) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        loadPokemon();
    }, []);

    return (
        <div>
            {!loading ? (
                <div className="card" onClick={() => { viewDetail(pokemon.id) }}>
                    <h3 className='id'> #{pokemon.id}</h3>
                    <h1 className='namePokemon'> {pokemon.name.charAt(0) ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) : pokemon.name}</h1>
                    <img src={pokemon.image} alt={pokemon.name} />
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    )
}

export default Cards