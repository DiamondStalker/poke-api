import { React, useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import { getListPokemon } from '../services/api'


function Home() {

    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchpoke, setsearchpoke] = useState('')

    useEffect(() => {
        const loadPokemons = async () => {
            try {
                if (localStorage.getItem("ListPokemons")) {
                    setPokemons(JSON.parse(localStorage.getItem("ListPokemons")))
                }
                else {
                    let data = await getListPokemon();
                    setPokemons(data);
                    localStorage.setItem("ListPokemons", JSON.stringify(data))
                }

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }

            
        }

        loadPokemons();
    }, []);

    return (
        <div className='home'>
            <Navbar
                setPokemons={setPokemons}
                setsearchpoke={setsearchpoke}
            />
            <div className='card-container' style={{ backgroundColor: "white", borderRadius: "20px" }}>
                {
                    pokemons.map((pokemon, i) => (
                        <Cards poke={pokemon} id={i} />
                    ))
                }
            </div>

        </div>
    )
}

export default Home