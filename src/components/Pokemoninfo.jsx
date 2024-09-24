import React from 'react'
import weightIcon from '../assets/img/weight.png';
import scale from '../assets/img/scale.png'
const Pokemoninfo = ({ poke, id }) => {
    if (!poke || !id) return null; // Manejo de caso en que no hay datos

    return (
        <div className="pokemon-info">
            <div className="info-item">
                <img src={weightIcon}></img>
                <strong> {poke.weight} kg</strong>
                <p>WEIGTH</p>
            </div>
            <div className="separator"></div>
            <div className="info-item">
                <img src={scale}></img>
                <strong> {poke.height} m </strong>
                <p>HEIGHT</p>
            </div>
            <div className="separator"></div>
            <div className="info-item abilities">
                {poke.abilities.map((elem, id) => (
                    <p key={id} className="ability-item">
                        {elem.ability.name+"\n"}
                    </p>
                ))}
                <p>MOVES</p>
            </div>
        </div>
    );



}

export default Pokemoninfo