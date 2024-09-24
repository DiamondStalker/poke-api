import React, { useState } from 'react'
import logo from '../assets/img/Pokeball.png'
import search from '../assets/img/icons8-search-50.png'
import '../assets/css/home.css'

const Title = ({ setPokemons, setsearchpoke }) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value); 

        if (value === '') {
            window.location.reload();
            localStorage.removeItem('ListPokemons')
            localStorage.removeItem('search')
            setsearchpoke('');
        }
    };

    const handleKeyPress = async (event) => {
        if (event.key === 'Enter') {
            window.location.reload();
            setSearchTerm(searchTerm);
            setsearchpoke(searchTerm);
            let searchData = [];
            searchData.push({
                name: searchTerm,
                url: `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
            })
            localStorage.setItem("ListPokemons", JSON.stringify(searchData))
            setPokemons(searchData)
            localStorage.setItem("search", searchTerm)
        }
    };

    return (
        <div>
            <div className='Logo'>
                <img src={logo} />
                <h1>Pokédex</h1>
            </div>

            <div className="search-input">
                <img className="search-icon" src={search} alt="Buscar" />
                <input
                    type="search"
                    id="search"
                    placeholder="Buscar Pokemon"
                    {...(localStorage.getItem('search') ? { value: localStorage.getItem('search') } : {})}
                    onChange={handleInputChange} // Actualiza el estado al escribir
                    onKeyPress={handleKeyPress} // Maneja la tecla Enter
                />
            </div>



        </div>
    )
}

export default Title