import React from 'react'
import '../assets/css/detail.css'
import logo from '../assets/img/Pokeball.png'
import Pokemoninfo from '../components/Pokemoninfo'
import Type from '../components/Type';
import Stats from '../components/Stats';
import colors from '../utils/colors.json'
import { useNavigate } from "react-router-dom";
import backIcon from '../assets/img/left-arrow.png'

const Detail = () => {

    const navigate = useNavigate();


    let info = localStorage.getItem(window.location.href.split('/').pop())

    info = JSON.parse(info);

    const handleBack = () => {
        navigate('/');
    }


    return (
        <div className={`detail-container ${info.types[0].type.name}`}>
            <div className="header">
                <img src={backIcon} onClick={handleBack} alt="Back" width={24} height={24} />
                <h1 className='name' onClick={handleBack}>{info.name.charAt(0) ? info.name.charAt(0).toUpperCase() + info.name.slice(1) : info.name.charAt(0)}</h1>

                <h1 className='idPokemon'>#{info.id}</h1>
                <img className={'logo'} src={logo} alt="Pokeball" />
            </div>

            <div className="info-container">
                <img className={'pokemonImg'} src={info.image} alt={info.name} />
                {info.types.map((elem, i) => (
                    <Type poke={elem} key={i} />
                ))}
                <h2 className={'about'} style={{ color: colors[info.types.length > 0 ? info.types[0].type.name : 'defaultColor'] }}>
                    ABOUT
                </h2>
                <Pokemoninfo poke={info} id={info.id} />

                <h2 className={'STATS'} style={{ color: colors[info.types.length > 0 ? info.types[0].type.name : 'defaultColor'] }}>
                    Base Stats
                </h2>

                <Stats poke={info} color={info.types[0].type.name} id={info.id} />

            </div>
        </div>
    );


}

export default Detail